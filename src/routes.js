import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Convert from "./pages/Convert";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Convert} />
      </Switch>
    </BrowserRouter>
  );
}
