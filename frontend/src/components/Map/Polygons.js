import React from "react";
import { Polygon, Popup } from "react-leaflet";

const Polygons = ({ polygons }) => {
  return (
    <>
      {polygons.map((polygon, index) => {
        return (
          <Polygon key={index} positions={[polygon.shape]}>
            <Popup>{polygon.popup}</Popup>
          </Polygon>
        );
      })}
    </>
  );
};

export default Polygons;
