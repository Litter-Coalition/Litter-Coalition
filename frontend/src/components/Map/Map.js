import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "../../styles/leaflet.css";

import AddLocationMarker from "./AddLocationMarker";
// import CurrentLocation from "./CurrentLocation"; // Current Location Marker creates a marker on the user's current location
import Polygons from "./Polygons";

const Map = (props) => {
  const [polygons] = React.useState([
    {
      popup: "Proud Astorian",
      shape: [
        [40.7588954203221, -73.9190196990967],
        [40.761300880922235, -73.91726016998292],
        [40.760098161503265, -73.91472816467287],
        [40.75575843890192, -73.91219615936281],
      ],
    },
    {
      popup: "Anti-Litter Group",
      shape: [
        [40.76120336394223, -73.92378330230714],
        [40.76614404424928, -73.91974925994874],
      ],
    },
    {
      popup: "Hell's Kitchen Team",
      shape: [
        [40.772221877329024, -73.92595052719118],
        [40.774171866400664, -73.93185138702394],
        [40.77228687788679, -73.9329242706299],
        [40.77205937565639, -73.93230199813844],
      ],
    },
  ]);

  const [addNewEvent, setAddNewEvent] = React.useState(false);
  // const [newEventForm, setNewFormEvent] =
  const [newEvent, setNewEvent] = React.useState([]);

  const handleAdd = () => {
    setAddNewEvent(true);
  };

  const handleRemove = () => {
    setAddNewEvent(false);
    polygons.push({ popup: "test", shape: newEvent });
  };

  return (
    <div>
      {addNewEvent ? (
        <button onClick={() => handleRemove()}>Finish Drawing</button>
      ) : (
        <button onClick={() => handleAdd()}>Add an Event</button>
      )}
      <MapContainer center={[40.75, -73.931]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {addNewEvent ? <AddLocationMarker newEvent={newEvent} /> : null}
        {addNewEvent ? <Polygons polygons={newEvent} /> : null}
        <Polygons polygons={polygons} newEvent={newEvent} />
      </MapContainer>
    </div>
  );
};

export default Map;