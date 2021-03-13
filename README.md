# Litter-Coalition

A mono repo to rule all the trash

## Development

```bash
docker-compose build
docker-compose run
```

### Seed Data For Dev [Optional]

Sample data available in Postgres and as MBtiles via the following:

1. Download NYC [streets data](https://data.cityofnewyork.us/City-Government/NYC-Street-Centerline-CSCL-/exjm-f27b) from NYC Open Data Portal in the `Original` format and save to `./data/raw/` (this file is ~70MB and the folder is included in `.gitignore`)

2. Exec into `litter-coalistion_db_1` with `docker exec -ti litter-coalition_db_1 bash` and run `./bash dataproc_geo.sh` to populate the DB and generate mbtiles.

   - Available in DB `postgis` @ `public.centerline`
   - Available as MBtiles on Zoom (10,18) at `/data/layers/centerline`

This pattern should hold for (most) geospatial available through the open data portal, `sed "s/centerline/<NEW TERM>/g" dataproc_geo.sh` should allow for drop in replacement of any other dataset.

### Flask

To access the flask API:

`curl http://127.0.0.1:50000`
