# Starting w. MDillon PostGIS Instance, runs a PostGIS instance on start
FROM mdillon/postgis

# Include Geospatial Utils
# build-essential -> make 
# gdal-bin, sqlite3, libz-dev, zlib1g-dev -> tippecanoe
# wget, unizp, git -> general utils
RUN apt-get update \
    && apt-get -y install \
    build-essential \
    wget \
    unzip \
    git \
    gdal-bin \
    libsqlite3-dev \
    libz-dev \
    zlib1g-dev 
    
# Build Tippecanoe; Utility for GeoJSON -> Tiles. SLOW! Expect ~3-5min
RUN git clone https://github.com/mapbox/tippecanoe.git &&\
    cd tippecanoe &&\
    make install

# Build MBUtils; Utility for TilesDB -> /x/y/z tiles
RUN git clone git://github.com/mapbox/mbutil.git

COPY ./dataproc_geo.sh /dataproc_geo.sh

