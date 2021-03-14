import "./App.css";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ViewEventsPage from "./pages/ViewEventsPage";
import ReportPage from "./pages/ReportPage";
import FAQPage from "./pages/FAQPage";

// import Map from "./components/Map/Map";
// import Map2 from "./components/Map2";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/view-events" component={ViewEventsPage} />
        <Route path="/report" component={ReportPage} />
        <Route path="/faq" component={FAQPage} />
      </Switch>
    </div>
  );
}

export default App;
