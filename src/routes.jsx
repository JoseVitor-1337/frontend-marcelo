import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import LoginForm from "./pages/LoginForm";

import PublicRouter from "./routes/PublicRouter";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouter exact path="/" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
