import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

import { Splash } from "./pages/Splash";
import { About } from "./pages/About";
import { ProfessionalSummary } from "./pages/ProfessionalSummary";

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
        <Route path="/professional-summary">
          <ProfessionalSummary />
        </Route>
      </Switch>
    </>
  );
}

export default App;
