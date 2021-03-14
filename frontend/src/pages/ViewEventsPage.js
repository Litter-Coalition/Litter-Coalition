import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

import Map from "../components/Map/Map";

const ViewEventsPage = () => {
	const [viewMap, setViewMap] = useState(true);
	return (
		<div>
			<ButtonGroup>
				<Button onClick={() => setViewMap(true)}>View map</Button>
				<Button onClick={() => setViewMap(false)}>View events</Button>
				<Button>Right</Button>
			</ButtonGroup>
			{viewMap ? <Map /> : <h1>I'm a list of events</h1>}
		</div>
	);
};

export default ViewEventsPage;
