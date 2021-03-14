import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ViewEventsPage from "./pages/ViewEventsPage";
import ReportPage from "./pages/ReportPage";
import FAQPage from "./pages/FAQPage";
import CreateEventForm from "./pages/CreateEventForm";

// import GeoLocator from "./utils/geolocator";

function App() {
  return (
    <div className="App">
      {/* <button onClick={() => GeoLocator.getCoords()}></button> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/view-events" component={ViewEventsPage} />
        <Route path="/report" component={ReportPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/create-event-form" component={CreateEventForm} />
      </Switch>
    </div>
  );
}

export default App;
