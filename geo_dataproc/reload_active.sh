#! bin/sh 

# Reload Active - Nightly Job...
ogr2ogr -f GeoJSON /data/layers/centerline_active.geojson PG:"dbname=$POSTGRES_DB user=$POSTGRES_USER" \
    -sql "select * from public.centerline where l_zip='11101 limit 100'"

tippecanoe \
    -L centerline_active:/data/layers/centerline_active.geojson \
    -L centerline:/data/layers/centerline.geojson \
    -f -F -ps -pf -pk -pt -Bg \
    --drop-densest-as-needed \
    -o /data/layers/centerline_active.mbtiles -z18 -Z10\
    --drop-lines\
    --force