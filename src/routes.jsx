import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import ParticipantForm from "./pages/ParticipantForm";
import ResearcherForm from "./pages/ResearcherForm";
import AdministerHome from "./pages/AdministerHome";
import ParticipantSearchs from "./pages/ParticipantSearchs";
import ResearcherSearchs from "./pages/ResearcherSearchs";

import PublicRouter from "./routes/PublicRouter";
import AdministerRouter from "./routes/AdministerRouter";
import ParticipantRouter from "./routes/ParticipantRouter";
import ResearcherRouter from "./routes/ResearcherRouter";

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
        <ParticipantRouter
          path="/participant/searchs"
          component={ParticipantSearchs}
        />
        <ResearcherRouter
          path="/researcher/searchs"
          component={ResearcherSearchs}
        />
        <AdministerRouter path="/administer/home" component={AdministerHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
