import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const AddLocationMarker = () => {
  const [position, setPosition] = React.useState(null);
  useMapEvents({
    click(e) {
      console.log(e.latlng);
      setPosition(e.latlng);
      //   console.log("map", map);
    },
  });

  return position === null ? null : (
    <Marker position={position} draggable={false}>
      <Popup>Staring Point!</Popup>
    </Marker>
  );
};

export default AddLocationMarker;
