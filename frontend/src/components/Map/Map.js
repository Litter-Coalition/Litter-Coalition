import React, { useState } from "react";
import GeoLocator from "../../utils/geolocator";
import { MapContainer, TileLayer } from "react-leaflet";

import "../../styles/leaflet.css";

import AddLocationMarker from "./AddLocationMarker";
// import CurrentLocation from "./CurrentLocation"; // Current Location Marker creates a marker on the user's current location
import Polygons from "./Polygons";
import MapUI from "./MapUI";
import { Col, Form, FormGroup, Label, Row, Input } from "reactstrap";

const Map = (props) => {
	const [coords, setCoords] = useState([[40.75, -73.931]]);
	const [polygons, setPolygons] = useState([
		// {
		// 	popup: "Proud Astorian",
		// 	shape: [
		// 		[40.7588954203221, -73.9190196990967],
		// 		[40.761300880922235, -73.91726016998292],
		// 		[40.760098161503265, -73.91472816467287],
		// 		[40.75575843890192, -73.91219615936281],
		// 	],
		// },
	]);

	const addNewPolygon = (polygon) => {
		setPolygons((polygons) => [...polygons, polygon]);
	};

	const updateCrds = () => {
		GeoLocator.getCoords();
	};

	const routes = polygons.map((polygon, index) => {
		return (
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label for="exampleState">{polygon.popup}</Label>
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="Rename Route"
						/>
					</FormGroup>
				</Col>
			</Row>
		);
	});

	// <Row form>
	// 				<Col md={6}>
	// 					<FormGroup>
	// 						<Input
	// 							type="email"
	// 							name="email"
	// 							id="exampleEmail"
	// 							placeholder="with a placeholder"
	// 						/>
	// 					</FormGroup>
	// 				</Col>
	// 			</Row>

	return (
		<div>
			<button onClick={updateCrds}>Locate Me</button>
			<MapContainer
				center={[40.75, -73.931]}
				zoom={12}
				scrollWheelZoom={true}
			>
				<MapUI addNewPolygon={addNewPolygon} />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					//   url="http://localhost:8080/data/centerline/{z}/{x}/{y}.pbf"
				/>
				<Polygons polygons={polygons} />
			</MapContainer>
			<Form>{routes}</Form>
		</div>
	);
};

export default Map;
