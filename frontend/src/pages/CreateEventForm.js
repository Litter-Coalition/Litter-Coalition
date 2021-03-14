import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// import MapCreateEvent from "../components/MapCreateEvent(Legacy)";
import MapCreateEvent from "../components/MapCreateEvent";

const CreateEventForm = (props) => {
  const emptyEventData = {
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    organization: "",
    eventLeader: "",
    contactInfo: "",
  };

  const [newEventData, setNewEventData] = React.useState(emptyEventData);
  // const [stepOne, setStepOne] = React.useState(true);
  // const [stepTwo, setStepTwo] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState({
    stepOne: true,
    stepTwo: false,
  });

  const handleChange = (event) => {
    setNewEventData({
      ...newEventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    setCurrentStep({ ...currentStep, stepOne: false, stepTwo: true });
  };

  return (
    <>
      {currentStep.stepOne && (
        <>
          <Form>
            <FormGroup>
              <Label for="eventTitle">Event Title</Label>
              <Input
                type="text"
                name="eventTitle"
                id="eventTitle"
                placeholder="Event Title"
                value={newEventData.eventTitle}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="eventTitle">Date</Label>
              <Input
                type="date"
                name="eventDate"
                id="eventDate"
                placeholder="Date"
                value={newEventData.eventDate}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="eventTitle">Start Time</Label>
              <Input
                type="time"
                name="eventTime"
                id="eventTime"
                placeholder="Start Time"
                value={newEventData.eventTime}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="organization">Organization</Label>
              <Input
                type="text"
                name="organization"
                id="organization"
                placeholder="Organization"
                value={newEventData.organization}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="eventLeader">Event Leader</Label>
              <Input
                type="text"
                name="eventLeader"
                id="eventLeader"
                placeholder="Event Leader"
                value={newEventData.eventLeader}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="contactInfo">Contact Info</Label>
              <Input
                type="text"
                name="contactInfo"
                id="contactInfo"
                placeholder="Contact Info"
                value={newEventData.contactInfo}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Form>
          <Button onClick={() => handleSubmit()}>Create Map</Button>
        </>
      )}
      {currentStep.stepTwo && <MapCreateEvent />}
    </>
  );
};

export default CreateEventForm;
