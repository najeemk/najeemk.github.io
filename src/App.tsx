import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import "./styles/style.css";

import { Splash } from "./pages/Splash";
import { About } from "./pages/About";
import { ProfessionalSummary } from "./pages/ProfessionalSummary";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/summary">
          <ProfessionalSummary />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
