import React from "react";
import Caterers from "./components/caterers";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CatererForm from "./components/caterers/form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/caterers/create" component={CatererForm} />
          <Route path="/caterers" component={Caterers} />
          <Redirect from="/" to="/caterers" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
