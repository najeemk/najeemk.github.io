import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import "./styles/style.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ProfessionalSummary } from "./pages/ProfessionalSummary";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/summary">
          <ProfessionalSummary />
        </Route>
      </Switch>
    </>
  );
}

export default App;
