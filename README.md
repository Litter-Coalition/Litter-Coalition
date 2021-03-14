# Litter-Coalition

A mono repo to rule all the trash

## Development

```bash
# if you are trying to load tiles you will need to skip to the Seed Data section
docker-compose build
docker-compose up
```

### Seeding Data For Development

Sample data available in Postgres and as MBtiles via the following:

1. Save  NYC [streets data](https://data.cityofnewyork.us/api/views/exjm-f27b/files/7fdd753b-08d3-4cdc-aaad-94be7c5a32a6?download=true&filename=Centerline_20170501.zip) to `./data/raw/`.

2. Save OpenMapTiles [basemap layer data](https://data.maptiler.com/downloads/tileset/osm/north-america/us/new-york/new-york/) using the onetime download link given on the page. Replace `<TOKEN>` in the command below:

    ```bash
    wget -c https://data.maptiler.com/download/<TOKEN>/maptiler-osm-2017-07-03-v3.6.1-new-york_new-york.mbtiles?usage=education -O ./data/layers/nyc_detail.mbtiles
    ```

3. Exec into `litter-coalition_db_1`  to populate the DB and generate mbtiles.

    ```bash
    # On Host
    `docker exec -ti litter-coalition_db_1 bash`
    ```

    ```bash
    # In litter-coalition_db_1 bash
    bash ./dataproc.sh ./data/raw/Centerline_20170501.zip centerline
    ```

    - After this completes, which can take some time, you will need to restart the tile server `docker restart litter-coalition_tileserver_1`. At the end of this step, you'll have the following:

      - Streets Data Available in DB `litter_coalition` @ `public.centerline`
  
      - Streets Data Available as MBtiles at `/data/layers/centerline.mbtiles` (for tileServer GL)

4. [**OPTIONAL**] Test the database connection and that file(s) loaded as expected with a query to count rows in the target table. Assumes you have `psql`, can use any db client.

    ```bash
    psql -qAt -h localhost -p 5433 \
        -d litter_coalition -U trash \
        -c 'select count(*) from centerline;'
    ```

5. Test tileserver, navigate to `http://localhost:8080/`. You should see two panels, `Styles` and `Data`.

   - Under `Styles` there should be an entry with a small rendered map of Manhattan. Click `viewer` and the map preview will open in Queens.
  
   - Under `data` there should be two panels named `styling-example` and `centerline`. Click `inspect` and the map preview will open in Queens.

### Flask

To access the flask API:

`curl http://127.0.0.1:50000`
