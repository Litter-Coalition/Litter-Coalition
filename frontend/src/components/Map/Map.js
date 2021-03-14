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

	// duplicated no time to refactor
	const highlightHoveredRoute = (i) => {
		const polygonCopy = polygons;
		polygonCopy[i].fillOptions = { color: "#FAE6E6" };
		setPolygons([...polygonCopy]);
	};

	const unHighlightHoveredRoute = (i) => {
		const polygonCopy = polygons;
		polygonCopy[i].fillOptions = { color: "#E88080" };
		setPolygons([...polygonCopy]);
	};

	const routes = polygons.map((polygon, index) => {
		return (
			<Row form>
				<Col
					onMouseEnter={() => highlightHoveredRoute(index)}
					onMouseLeave={() => unHighlightHoveredRoute(index)}
				>
					<FormGroup>
						<Input
							type="text"
							name="route"
							placeholder={polygon.popup}
						/>
					</FormGroup>
				</Col>
			</Row>
		);
	});

	return (
		<div>
			<MapContainer
				center={[40.75, -73.931]}
				zoom={12}
				scrollWheelZoom={true}
			>
				<MapUI addNewPolygon={addNewPolygon} />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					url="http://localhost:8080/data/centerline/{z}/{x}/{y}.pbf"
				/>
				<Polygons
					polygons={polygons}
					updatePolygonPopupData={updatePolygonPopupData}
				/>
			</MapContainer>
			<Form>{routes}</Form>
		</div>
	);
};

export default Map;
