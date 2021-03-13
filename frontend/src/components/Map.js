import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "../styles/leaflet.css";

const Map = (props) => {
  const [currentLocation, setcurrentLocation] = React.useState({
    latlng: [40.75, -73.931],
    zoom: 12,
  });

  const map = React.useRef(null);

  React.useEffect(() => {}, [currentLocation]);

  const handlecurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setcurrentLocation({
          latlng: [position.coords.latitude, position.coords.longitude],
          zoom: 15,
        });
      });
    } else {
      console.log("Not Available");
    }
  };

  console.log("currentLocation state -", currentLocation);

  return (
    <div>
      <button onClick={() => handlecurrentLocation()}>Current Location</button>
      <div>{currentLocation.latlng}</div>
      <div>{currentLocation.zoom}</div>
      <MapContainer
        center={currentLocation.latlng}
        zoom={currentLocation.zoom}
        scrollWheelZoom={true}
        ref={map}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
