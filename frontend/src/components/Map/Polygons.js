import React, { useState } from "react";
import { Marker, Polyline, Tooltip } from "react-leaflet";
import Popup from "react-leaflet-editable-popup";
import { Input } from "reactstrap";

const Polygons = ({ polygons, updatePolygonPopupData }) => {
	const [popup, setPopups] = useState([]);

	const handleInputChange = (e, i) => {
		console.log(e, i)
		updatePolygonPopupData(e, i);
	};

	const mapped_polygons = polygons.map((polygon, index) => {
		return (
			<Polyline key={index} positions={[polygon.shape]} pathOptions={polygon.fillOptions}>
				<Popup
					position={polygon.shape[0]}
					open={polygons[index + 1] == null ? true : false}
				>
					<div>
						<Input
							placeholder="Enter a segment name"
							value={polygon.popup}
							onChange={handleInputChange}
						></Input>
					</div>
				</Popup>
			</Polyline>
		);
	});

	return <>{mapped_polygons}</>;
};

export default Polygons;
