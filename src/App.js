import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./Components/Header/TopBar";
import HomePage from "./Pages/HomePage/HomePage";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ScrollToTop />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
