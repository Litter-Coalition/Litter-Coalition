import React from "react";
import { Marker, Polyline, Tooltip } from "react-leaflet";
import Popup from 'react-leaflet-editable-popup';
import { Input } from "reactstrap";

const Polygons = ({ polygons }) => {
	const mapped_polygons = polygons.map((polygon, index) => {
		console.log(index, polygons[index + 1], polygons);
		console.log(polygons[index + 1] == null ? true : false);
		return (
			<Polyline key={index} positions={[polygon.shape]}>
				<Popup
					position={polygon.shape[0]}
					open={polygons[index + 1] == null ? true : false}
				>
					<div>
						<Input placeholder={polygon.popup}></Input>
					</div>
				</Popup>
			</Polyline>
		);
	});

	return <>{mapped_polygons}</>;
};

export default Polygons;
