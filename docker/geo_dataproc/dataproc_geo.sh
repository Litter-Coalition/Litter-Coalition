#! bin/sh

# Unzip Static Geospatial Data
mkdir -p ./data/layers &&\
    unzip -o ./data/raw/Centerline.zip -d ./data/layers/centerline

# Write Streets as DB Objects -> PostGIS; Convert to EPSG 4326, (lng, lat)
# Option: Serving Dynamic Tiles
ogr2ogr -overwrite \
    -f "PostgreSQL" PG:"dbname=${POSTGRES_DB} user=${POSTGRES_USER}" \
    ./data/layers/centerline \
    -nln centerline \
    -lco OVERWRITE=yes \
    -t_srs "EPSG:4326"

# Write Original Shapefiles To GeoJSON; Convert to EPSG 4326
# Option: Serving Static Tiles
ogr2ogr -f GeoJSON \
    -t_srs "EPSG:4326" \
    ./data/layers/centerline.geojson  ./data/layers/centerline

# To MBTiles - Create a SQLiteDB w. all shapes prepped for /x/y/z extraction
# Use level 10->18
# Ref: https://fuzzytolerance.info/blog/2017/02/02/Making-your-own-tiles-with-Tippecanoe/
# Ref: https://wiki.openstreetmap.org/wiki/Zoom_levels
tippecanoe -L centerline:./data/layers/centerlines.geojson \
    --drop-densest-as-needed \
    -o ./data/layers/centerline.mbtiles -z18 -Z10

# MB-Util; Extract all Tiles...
./mbutil/mb-util /data/layers/centerline.mbtiles \
    /data/layers/centerline