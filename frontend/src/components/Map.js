import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Polygon,
} from "react-leaflet";

import "../styles/leaflet.css";

//! Current Location Marker creates a marker on the user's current location
//* Uncomment <CurrentLocationMarker/> in the parent component
// const CurrentLocationMarker = () => {
//   const [position, setPosition] = React.useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position} draggable={true}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// };

const AddLocationMarker = () => {
  const [position, setPosition] = React.useState(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} draggable={true}>
      <Popup>Staring Point!</Popup>
    </Marker>
  );
};

const Map = (props) => {
  const [polygons, setPolygons] = React.useState([
    [
      [40.75, -73.931],
      [40.75, -74.931],
    ],
    [
      [40.7568, -73.92133],
      [40.7568, -74.93],
    ],
  ]);

  const [currentLocation, setCurrentLocation] = React.useState(null);

  return (
    <div>
      <MapContainer center={[40.75, -73.931]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <CurrentLocationMarker /> */}
        {/* <Marker position={[40.75, -73.931]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <AddLocationMarker />
        {polygons.map((polygon, index) => {
          return <Polygon key={index} positions={[polygon]} />;
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
