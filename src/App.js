import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SelectToolPage from "./Components/MainTools/SelectToolPage.js";
import Panther from "./Components/MainTools/Panther.js";
import Cheetah from "./Components/MainTools/Cheetah.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={SelectToolPage} />
          <Route exact path={"/panther"} component={Panther} />
          <Route exact path={"/cheetah"} component={Cheetah} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
