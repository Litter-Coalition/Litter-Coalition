import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ViewEventsPage from "./pages/ViewEventsPage";
import ViewEventPage from './pages/ViewEventPage';
import ReportPage from "./pages/ReportPage";
import FAQPage from "./pages/FAQPage";
import CreateEventFormPage from "./pages/CreateEventFormPage";

// import GeoLocator from "./utils/geolocator";

function App() {
  return (
    <div className="App">
      {/* <button onClick={() => GeoLocator.getCoords()}></button> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/view-events" component={ViewEventsPage} />
        <Route path="/event/:id" component={ViewEventPage} />
        <Route path="/report" component={ReportPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/create-event-form" component={CreateEventFormPage} />
      </Switch>
    </div>
  );
}

export default App;
