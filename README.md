# Litter-Coalition

A mono repo to rule all the trash

## Development

```bash
docker-compose build
docker-compose run
```

### Seed Data For Dev [Optional]

Sample data available in Postgres and as MBtiles via the following:

1. Download NYC [streets data](https://data.cityofnewyork.us/api/views/exjm-f27b/files/7fdd753b-08d3-4cdc-aaad-94be7c5a32a6?download=true&filename=Centerline_20170501.zip) save to `./data/raw/` (this file is ~70MB and the folder is included in `.gitignore`)

2. [**SKIP**] Get basemap layer here: `https://data.maptiler.com/downloads/tileset/osm/north-america/us/new-york/new-york/`, should give a one time download link `wget -c https://data.maptiler.com/download/<TOKEN>/maptiler-osm-2017-07-03-v3.6.1-new-york_new-york.mbtiles?usage=education`

3. Exec into `litter-coalition_db_1` with `docker exec -ti litter-coalition_db_1 bash` and run `bash ./dataproc.sh ./data/raw/Centerline_20170501.zip centerline` to populate the DB and generate mbtiles. This pattern will hold for (most) geospatial available through the open data portal, `bash dataproc.sh <LOCAL FILE> <LAYERNAME>` should allow for drop in replacement of any other dataset. This step allows for the following:

   - Streets Data Available in DB `litter_coalition` @ `public.centerline`
   - Streets Data Available as MBtiles on Zoom (10,TBD) at `/data/layers/centerline.mbtiles` (for tileServer GL)

4. [**OPTIONAL**]. Test the database connection and that files loaded as expected with a query to count rows in the target table. Assumes you have `psql`, can use any db client.

    - `psql -h psql -qAt -h localhost -p 5433 -d litter_coalition -U trash -c 'select count(*) from centerline;'`

5. [**NOTE/WIP**] There **should** be a way to serve multiple layers without restarting the `litter-coalition_tileserver_1` container. As it stands, not yet determined how to do this. The easiest way to have tileserver-gl recognize the `centerlines.mbtiles` file is to run `docker restart litter-coalition_tileserver_1`. Expect the following logs from `compose`.

    - [Docs](https://readthedocs.org/projects/tileserver/downloads/pdf/latest/) Note this is impossible...
        >It is possible to reload the configuration file without restarting the whole process by sending a SIGHUP signal to the
        >node process. However, this does not currently work when running the tileserver-gl docker container (the signal is not
        >passed to the subprocess, see https://github.com/maptiler/tileserver-gl/issues/420#issuecomment-597507663).

```bash
tileserver_1  | Starting tileserver-gl v3.1.1
tileserver_1  | Caught signal 15, stopping gracefully
tileserver_1  | Terminated
litter-coalition_tileserver_1 exited with code 143
tileserver_1  | Starting tileserver-gl v3.1.1
tileserver_1  | No MBTiles specified, using centerline.mbtiles
tileserver_1  | [INFO] Automatically creating config file for centerline.mbtiles
tileserver_1  | [INFO] See documentation to learn how to create config.json file.
tileserver_1  | WARN: MBTiles not in "openmaptiles" format. Serving raw data only...
tileserver_1  | Run with --verbose to see the config file here.
tileserver_1  | Starting server
tileserver_1  | Listening at http://[::]:80/
tileserver_1  | Startup complete
```

3b. Test tileserver, navigate to `http://localhost:8080/`, click `inspect` and you'll be routed to an aribitary starting point in Queens (can be changed in config [WIP]).

### Flask

To access the flask API:

`curl http://127.0.0.1:50000`
