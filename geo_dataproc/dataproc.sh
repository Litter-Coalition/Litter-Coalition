#! bin/sh

# Check if src is spatial archive or file...
if [ -f "$1" ]; then
    # Unzip Static Geospatial Data
    mkdir -p ./data/layers && unzip -o $1 -d ./data/layers/$2
        
    # Write Streets as DB Objects -> PostGIS; Convert to EPSG 4326, (lng, lat)
    # Option: Serving Dynamic Tiles
    ogr2ogr -overwrite \
        -f "PostgreSQL" PG:"dbname=${POSTGRES_DB} user=${POSTGRES_USER}" \
        ./data/layers/$2 \
        -nln $2 \
        -lco OVERWRITE=yes \
        -t_srs "EPSG:4326"

    # Write Original Shapefiles To GeoJSON; Convert to EPSG 4326
    # Option: Serving Static Tiles
    ogr2ogr -overwrite\
        -f GeoJSON \
        -t_srs "EPSG:4326" \
        ./data/layers/$2.geojson  ./data/layers/$2/
fi

# To MBTiles - Create a SQLiteDB w. all shapes prepped for /x/y/z extraction
# Use level 13->16; this is expensive, consider running to level 20 for production??
# Ref: https://fuzzytolerance.info/blog/2017/02/02/Making-your-own-tiles-with-Tippecanoe/
# Ref: https://wiki.openstreetmap.org/wiki/Zoom_levels
tippecanoe -L $2:./data/layers/$2.geojson \
    --force \
    --reverse \
    -z16 -Z1 \
    --extend-zooms-if-still-dropping \
    --no-tile-size-limit \
    --no-line-simplification \
    --no-tiny-polygon-reduction \
    --exclude-all \
    -o ./data/layers/$2.mbtiles

# Cleanup: save a bit of space in the container
rm -rf /data/layers/$2 /data/layers/$2.geojson
