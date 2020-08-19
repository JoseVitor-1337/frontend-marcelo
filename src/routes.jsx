import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import ParticipantForm from "./pages/ParticipantForm";
import ResearcherForm from "./pages/ResearcherForm";

import PublicRouter from "./routes/PublicRouter";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouter exact path="/" component={LoginForm} />
        <PublicRouter path="/register/researcher" component={ResearcherForm} />
        <PublicRouter
          path="/register/participant"
          component={ParticipantForm}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
