import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import ParticipantForm from "./pages/ParticipantForm";
import ResearcherForm from "./pages/ResearcherForm";
import AdministerSearchs from "./pages/AdministerSearchs";
import ParticipantPendentSearchs from "./pages/ParticipantPendentSearchs";
import ParticipantCompletSearchs from "./pages/ParticipantCompletSearchs";
import ResearcherSearchs from "./pages/ResearcherSearchs";
import CreateSearch from "./pages/CreateSearch";

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
          path="/participant/pendent_searchs"
          component={ParticipantPendentSearchs}
        />
        <ParticipantRouter
          path="/participant/complet_searchs"
          component={ParticipantCompletSearchs}
        />
        <AdministerRouter
          path="/administer/searchs"
          component={AdministerSearchs}
        />
        <ResearcherRouter
          path="/researcher/searchs"
          component={ResearcherSearchs}
        />
        <ResearcherRouter path="/researcher/create" component={CreateSearch} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
