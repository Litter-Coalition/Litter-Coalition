import React from "react";
import { Polygon } from "react-leaflet";

const Polygons = ({ polygons }) => {
  return (
    <>
      {polygons.map((polygon, index) => {
        return <Polygon key={index} positions={[polygon]} />;
      })}
    </>
  );
};

export default Polygons;
