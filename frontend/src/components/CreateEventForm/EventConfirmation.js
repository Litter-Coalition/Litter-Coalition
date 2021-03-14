import React from "react";

const EventConfirmation = ({ newEventData }) => {
  return (
    <>
      <div>Confirmation Page</div>
      <div>{newEventData.eventTitle}</div>
      <div>{newEventData.eventDate}</div>
      <div>{newEventData.eventTime}</div>
      <div>
        {newEventData.organization} / {newEventData.eventLeader}
      </div>
      <div>{newEventData.contactInfo}</div>
    </>
  );
};

export default EventConfirmation;
