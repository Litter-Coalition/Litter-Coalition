import React from "react";
import { Marker, Polyline, Popup, Tooltip } from "react-leaflet";
import { Input } from "reactstrap";

const Polygons = ({ polygons }) => {
	const mapped_polygons = polygons.map((polygon, index) => {
		console.log(index, polygons[index + 1], polygons)
		console.log(polygons[index + 1] == null ? true : false)
		return (
			<Polyline key={index} positions={[polygon.shape]}>
					<Tooltip position={polygon.shape[0]} permanent={polygons[index + 1] == null ? true : false}>
						<Input placeholder={polygon.popup}></Input>
					</Tooltip>
			</Polyline>
		);
	});

	return <>{mapped_polygons}</>;
};

export default Polygons;
