import React from "react";
import { Polyline, Popup } from "react-leaflet";

const Polygons = ({ polygons }) => {
	const mapped_polygons = polygons.map((polygon, index) => {
		return (
			<Polyline key={index} positions={[polygon.shape]}>
				<Popup>{polygon.popup}</Popup>
			</Polyline>
		);
	});

	return <>{mapped_polygons}</>;
};

export default Polygons;
