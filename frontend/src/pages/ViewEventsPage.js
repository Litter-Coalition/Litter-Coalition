import React, { useState } from "react";

import Map from "../components/Map/Map";

const ViewEventsPage = () => {
  const [viewMap, setViewMap] = useState(true);
  return (
    <div>
      <button onClick={() => setViewMap(true)}>View map</button>
      <button onClick={() => setViewMap(false)}>View events</button>
      {viewMap ? <Map /> : <h1>I'm a list of events</h1>}
    </div>
  );
};

export default ViewEventsPage;
