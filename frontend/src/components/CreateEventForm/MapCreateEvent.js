import React from "react";
import { Button } from "reactstrap";

import Map from "../Map/Map";

const MapCreateEvent = ({ handleSubmitStepTwo }) => {
  return (
    <>
      <Map />
      <Button onClick={() => handleSubmitStepTwo()}>Continue</Button>
    </>
  );
};

export default MapCreateEvent;
