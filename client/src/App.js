import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Auth from "./components/Auth/Auth";
import Register from "./components/Register/Register";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
