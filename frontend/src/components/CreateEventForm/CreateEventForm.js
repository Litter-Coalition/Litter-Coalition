import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateEventForm = ({
  newEventData,
  handleChange,
  handleSubmitStepOne,
}) => {
  return (
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
      // <Input type="submit" value="submit" />
      <Button onClick={() => handleSubmitStepOne()}>Create Map</Button>
    </>
  );
};

export default CreateEventForm;
