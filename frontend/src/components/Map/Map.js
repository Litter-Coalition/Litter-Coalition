import React, { useState } from "react";
import GeoLocator from "../../utils/geolocator";
import { MapContainer, TileLayer } from "react-leaflet";

import "../../styles/leaflet.css";

import AddLocationMarker from "./AddLocationMarker";
// import CurrentLocation from "./CurrentLocation"; // Current Location Marker creates a marker on the user's current location
import Polygons from "./Polygons";
import MapUI from "./MapUI";
import { polygon } from "leaflet";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Map = (props) => {
	const [polygons, setPolygons] = useState([]);

	const addNewPolygon = (polygon) => {
		setPolygons((polygons) => [...polygons, polygon]);
	};

	const updatePolygonPopupData = (e, i) => {
		console.log("wwww");
	};

  return (
    <div>
      <MapContainer center={[40.75, -73.931]} zoom={12} scrollWheelZoom={true}>
        <MapUI addNewPolygon={addNewPolygon} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // url="http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        />
        <Polygons polygons={polygons} />
      </MapContainer>
    </div>
  );
};

export default Map;
