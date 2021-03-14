import React from "react";
import { Polyline, Popup } from "react-leaflet";

const Polygons = ({ polygons }) => {
  return (
    <>
      {polygons.map((polygon, index) => {
        return (
          <Polyline key={index} positions={[polygon.shape]}>
            <Popup>{polygon.popup}</Popup>
          </Polyline>
        );
      })}
    </>
  );
};

export default Polygons;
