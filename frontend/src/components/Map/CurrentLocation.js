import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const CurrentLocation = () => {
  const [position, setPosition] = React.useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} draggable={true}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default CurrentLocation;
