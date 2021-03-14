import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const AddLocationMarker = ({ newEvent }) => {
  const [position, setPosition] = React.useState(null);

  useMapEvents({
    click(e) {
      console.log(e.latlng);
      setPosition(e.latlng);
      newEvent.push([e.latlng.lat, e.latlng.lng]);
      console.log("newEvent", newEvent);
    },
  });

  console.log("new marker position", position);

  return position === null ? null : (
    <Marker position={position} draggable={false}>
      <Popup>Staring Point!</Popup>
    </Marker>
  );
};

export default AddLocationMarker;
