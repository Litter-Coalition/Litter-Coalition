import React, { useState } from "react";
import { Button } from "reactstrap";
import { useMapEvents } from "react-leaflet";
import { useLeafletContext } from "@react-leaflet/core";
import "./MapUI.css";

const MapUI = (props) => {
	const context = useLeafletContext();
    const [drawing, setDrawing] = useState(false);

	useMapEvents({
		click(e) {
			console.log(e.latlng);
		},
	});
	console.log(context);

    const draw = () => {
        if (drawing) {
            
        } else {
            setDrawing(true);
        }
    }

	return (
		<div>
            aaaaaaa
			<Button className="test-btn" onClick={draw}>aaaaaaaaa</Button>
		</div>
	);
};

export default MapUI;
