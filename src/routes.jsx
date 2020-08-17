import React from "react";
import { BrowserRouter as Routes, Switch } from "react-router-dom";
import "./style.css";

import LoginForm from "./pages/LoginForm";

import PublicRouter from "./routes/PublicRouter";

const Routes = () => {
  return (
    <Routes>
      <Switch>
        <PublicRouter exact path="/" component={LoginForm} />
      </Switch>
    </Routes>
  );
};

export default Routes;
