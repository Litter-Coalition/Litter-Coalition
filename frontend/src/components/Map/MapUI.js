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
					});
                    setPolyArr([])
				}
			}
		},
	});

	return (
		<div>
			<Button className="test-btn" onClick={() => setDrawing(true)}>
				draw
			</Button>
			<Button className="test-btn" onClick={() => setDrawing(false)}>
				stop draw
			</Button>
		</div>
	);
};

export default MapUI;
