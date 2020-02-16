import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SelectToolPage from "./Components/MainTools/SelectToolPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={SelectToolPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
