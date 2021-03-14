import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const CreateEventForm = (props) => {
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
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventTitle">Date</Label>
          <Input
            type="date"
            name="eventDate"
            id="eventDate"
            placeholder="Date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventTitle">Start Time</Label>
          <Input
            type="time"
            name="eventTime"
            id="eventTime"
            placeholder="Start Time"
          />
        </FormGroup>
        <FormGroup>
          <Label for="organization">Organization</Label>
          <Input
            type="text"
            name="organization"
            id="organization"
            placeholder="Organization"
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventLeader">Event Leader</Label>
          <Input
            type="text"
            name="eventLeader"
            id="eventLeader"
            placeholder="Event Leader"
          />
        </FormGroup>
        <FormGroup>
          <Label for="contactInfo">Contact Info</Label>
          <Input
            type="text"
            name="contactInfo"
            id="contactInfo"
            placeholder="Contact Info"
          />
        </FormGroup>
      </Form>
      <Link to="/map-event-create">
        <Button>Continue</Button>
      </Link>
    </>
  );
};

export default CreateEventForm;
