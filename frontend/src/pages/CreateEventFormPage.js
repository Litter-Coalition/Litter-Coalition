import React from "react";

import CreateEventForm from "../components/CreateEventForm/CreateEventForm";
import MapCreateEvent from "../components/CreateEventForm/MapCreateEvent";
import EventConfirmation from "../components/CreateEventForm/EventConfirmation";

const CreateEventFormPage = (props) => {
  //* States
  const emptyEventData = {
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    organization: "",
    eventLeader: "",
    contactInfo: "",
  };

  const [newEventData, setNewEventData] = React.useState(emptyEventData);
  const [currentStep, setCurrentStep] = React.useState({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
  });

  //* Handle Functions
  const handleChange = (event) => {
    setNewEventData({
      ...newEventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitStepOne = () => {
    // event.preventDefault();
    console.log("poop");
    setCurrentStep({ ...currentStep, stepOne: false, stepTwo: true });
  };

  const handleSubmitStepTwo = () => {
    setCurrentStep({ ...currentStep, stepTwo: false, stepThree: true });
  };

  return (
    <>
      {currentStep.stepOne && (
        <CreateEventForm
          newEventData={newEventData}
          handleChange={handleChange}
          handleSubmitStepOne={handleSubmitStepOne}
        />
      )}
      {currentStep.stepTwo && (
        <MapCreateEvent handleSubmitStepTwo={handleSubmitStepTwo} />
      )}
      {currentStep.stepThree && (
        <EventConfirmation newEventData={newEventData} />
      )}
    </>
  );
};

export default CreateEventFormPage;
