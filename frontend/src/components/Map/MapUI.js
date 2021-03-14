import React, { useState } from "react";
import { Button } from "reactstrap";
import { useMapEvents } from "react-leaflet";
import { useLeafletContext } from "@react-leaflet/core";
import "./MapUI.css";

const MapUI = ({ addNewPolygon }) => {
	// const context = useLeafletContext();
	const [drawing, setDrawing] = useState(false);
	const [polyArr, setPolyArr] = useState([]);
	const [count, setCount] = useState(0);

	useMapEvents({
		click(e) {
			if (drawing) {
				const polyArrCopy = polyArr;
				polyArrCopy.push([e.latlng.lat, e.latlng.lng]);
				setPolyArr(polyArrCopy);

				if (polyArrCopy.length > 1) {
                    setCount(count + 1);
					addNewPolygon({
						popup: `Hell's Kitchen Team ${count}`,
						shape: polyArrCopy,
						fillOptions: {
							color: '#E88080'
						}
					});
                    setPolyArr([[e.latlng.lat, e.latlng.lng]])
					setDrawing(false)
				}
			}
		},
	});

	return (
		<div>
			<Button className="test-btn" onClick={() => setDrawing(true)}>
				Add Route
			</Button>
		</div>
	);
};

export default MapUI;
