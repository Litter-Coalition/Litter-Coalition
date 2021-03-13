import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";

import "../styles/leaflet.css";

// const MyComponent = () => {
//   const map = useMapEvent("click", () => {
//     map.options.center([50.5, 30.5]);
//   });
//   return null;
// };

const Map = (props) => {
  const [currentLocation, setCurrentLocation] = React.useState({
    latlng: [40.75, -73.931],
    zoom: 12,
  });

  const handleCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setCurrentLocation({
          latlng: [position.coords.latitude, position.coords.longitude],
          zoom: 15,
        });
      });
    } else {
      console.log("Not Available");
    }
  };
  return (
    <div>
      <button onClick={() => handleCurrentLocation()}>Current Location</button>
      <div>{currentLocation.latlng}</div>
      <div>{currentLocation.zoom}</div>
      <MapContainer
        center={currentLocation.latlng}
        zoom={currentLocation.zoom}
        scrollWheelZoom={true}
      >
        {/* <MyComponent /> */}
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
