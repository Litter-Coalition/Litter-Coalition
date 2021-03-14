import React, { useState } from "react";
import GeoLocator from "../../utils/geolocator";
import { MapContainer, TileLayer } from "react-leaflet";

import "../../styles/leaflet.css";

import AddLocationMarker from "./AddLocationMarker";
// import CurrentLocation from "./CurrentLocation"; // Current Location Marker creates a marker on the user's current location
import Polygons from "./Polygons";
import MapUI from "./MapUI";

const Map = (props) => {
  const [coords, setCoords] = useState([[40.75, -73.931]]);
  const [polygons, setPolygons] = useState([
    {
      popup: "Proud Astorian",
      shape: [
        [40.7588954203221, -73.9190196990967],
        [40.761300880922235, -73.91726016998292],
        [40.760098161503265, -73.91472816467287],
        [40.75575843890192, -73.91219615936281],
      ],
    },
    {
      popup: "Anti-Litter Group",
      shape: [
        [40.76120336394223, -73.92378330230714],
        [40.76614404424928, -73.91974925994874],
      ],
    },
    {
      popup: "Hell's Kitchen Team",
      shape: [
        [40.772221877329024, -73.92595052719118],
        [40.774171866400664, -73.93185138702394],
        [40.77228687788679, -73.9329242706299],
        [40.77205937565639, -73.93230199813844],
      ],
    },
  ]);

  const addNewPolygon = (polygon) => {
    setPolygons((polygons) => [...polygons, polygon]);
  };

  const updateCrds = () => {
    console.log(GeoLocator.getCoords());
  };

  return (
    <div>
      <button onClick={updateCrds}>Locate Me</button>
      <MapContainer center={[40.75, -73.931]} zoom={12} scrollWheelZoom={true}>
        <MapUI addNewPolygon={addNewPolygon} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="http://127.0.0.1/tileserver/data/centerline/{z}/{x}/{y}.pbf"
        />
        <Polygons polygons={polygons} />
      </MapContainer>
    </div>
  );
};

export default Map;
