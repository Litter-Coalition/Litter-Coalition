import React from "react";
import * as L from "leaflet";

import "../styles/leaflet.css";

const Map2 = (props) => {
  const [currentLocation, setCurrentLocation] = React.useState({
    latlng: [40.75, -73.931],
    zoom: 12,
  });

  React.useEffect(() => {
    var mymap = L.map("mapid").setView(
      currentLocation.latlng,
      currentLocation.zoom
    );
    console.log("mymap", mymap);

    L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    }).addTo(mymap);

    var marker = L.marker([40.75, -73.931], { title: "My marker" }).addTo(
      mymap
    );

    mymap.on("click", function (e) {
      console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
    });
  }, []);

  const handleCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        // mymap.setView([2, -2], 12);
      });
    } else {
      console.log("Not Available");
    }
  };

  return (
    <div>
      <button onClick={() => handleCurrentLocation()}>Current Location</button>
      <div id="mapid"></div>
    </div>
  );
};

export default Map2;
