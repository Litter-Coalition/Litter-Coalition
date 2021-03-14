from os import environ
import sys

from app import db

TABLE = {
    'table':       'centerline',
    'srid':        '4326',
    'geomColumn':  'wkb_geometry',
    'attrColumns': 'ogc_fid, st_label'
    }


class Tile:
    def __init__(self, zoom, x, y, tile_format):
        self.zoom = int(zoom)
        self.x = float(x)
        self.y = float(y)
        self.tile_format = tile_format
        self.is_tile_valid()

    def is_tile_valid(self):
        if self.tile_format not in ['pbf', 'mvt']:
            raise ValueError("tile format must be pbf or mvt")
        size = 2 ** self.zoom
        if self.x >= size or self.y >= size:
            raise ValueError("zoom doesnt make sense")
        if self.x < 0 or self.y < 0:
            raise ValueError("x and y must be greater than zero")
        return True

    def to_envelope(self):
        # Width of world in EPSG:3857
        worldMercMax = 20037508.3427892
        worldMercMin = -1 * worldMercMax
        worldMercSize = worldMercMax - worldMercMin
        # Width in tiles
        worldTileSize = 2 ** self.zoom
        # Tile width in EPSG:3857
        tileMercSize = worldMercSize / worldTileSize
        # Calculate geographic bounds from tile coordinates
        # XYZ tile coordinates are in "image space" so origin is
        # top-left, not bottom right
        env = dict()
        env['xmin'] = worldMercMin + tileMercSize * self.x
        env['xmax'] = worldMercMin + tileMercSize * (self.x + 1)
        env['ymin'] = worldMercMax - tileMercSize * (self.y + 1)
        env['ymax'] = worldMercMax - tileMercSize * self.y
        return env

    @staticmethod
    def envelopeToBoundsSQL(env):
        DENSIFY_FACTOR = 4
        env['segSize'] = (env['xmax'] - env['xmin'])/DENSIFY_FACTOR
        sql_tmpl = 'ST_Segmentize(ST_MakeEnvelope({xmin}, {ymin}, {xmax}, {ymax}, 3857),{segSize})'
        return sql_tmpl.format(**env)

    # todo: change to parameterized queries with psycopg.sql
    def envelope_to_sql(self, environment):
        tbl = TABLE.copy()
        tbl['env'] = self.envelopeToBoundsSQL(environment)
        # Materialize the bounds
        # Select the relevant geometry and clip to MVT bounds
        # Convert to MVT format
        sql_tmpl = """
            WITH 
            bounds AS (
                SELECT {env} AS geom, 
                       {env}::box2d AS b2d
            ),
            mvtgeom AS (
                SELECT ST_AsMVTGeom(ST_Transform(t.{geomColumn}, 3857), bounds.b2d) AS geom, 
                       {attrColumns}
                FROM {table} t, bounds
                WHERE ST_Intersects(t.{geomColumn}, ST_Transform(bounds.geom, {srid}))
            ) 
            SELECT ST_AsMVT(mvtgeom.*) FROM mvtgeom
        """
        return sql_tmpl.format(**tbl)

    def sql_to_pbf(self, sql):
        result = db.engine.execute(sql)
        return result.first()['st_asmvt']
