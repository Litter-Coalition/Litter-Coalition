import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import ShareButton from "../components/ShareButton";

const LandingPage = () => {
  return (
    <>
      <h1>hello world</h1>
      <Link to="/view-events">View Events</Link>
      <br />
      <Link to="/report">Report</Link>
      <br />
      <Link to="/faq">FAQ</Link>
      <br />
      <Link to="/create-event-form">Create Event</Link>
      <br />
      <LoginButton />
      <ShareButton platform="facebook" />
    </>
  );
};

export default LandingPage;
