import React, { useState } from "react";
import { Button } from "reactstrap";
import { useMapEvents } from "react-leaflet";
import { useLeafletContext } from "@react-leaflet/core";
import "./MapUI.css";
import { polygon } from "leaflet";

const MapUI = ({ addNewPolygon }) => {
	const context = useLeafletContext();
	const [drawing, setDrawing] = useState(false);
	const [polyArr, setPolyArr] = useState([]);

	useMapEvents({
		click(e) {
			if (drawing) {
                const polyArrCopy = polyArr;
                polyArrCopy.push([e.latlng.lat, e.latlng.lng])
                console.log(polyArr)
                setPolyArr(polyArrCopy)
                addNewPolygon({
                    popup: "Hell's Kitchen Team",
                    shape: polyArrCopy
                });
				// setPolyArr((polyArr) => [...polyArr, [e.latlng.lat, e.latlng.lng]]);
			}
		},
	});
	console.log(context);

	const draw = (e) => {
		setDrawing(true);
	};

	const stopDrawing = () => {
		addNewPolygon({
			popup: "Hell's Kitchen Team",
			shape: polyArr
		});

        setPolyArr([])
	};

    console.log(polyArr)

	return (
		<div>
			aaaaaaa
			<Button className="test-btn" onClick={draw}>
				draw
			</Button>
			<Button className="test-btn" onClick={stopDrawing}>
				stop draw
			</Button>
		</div>
	);
};

export default MapUI;
