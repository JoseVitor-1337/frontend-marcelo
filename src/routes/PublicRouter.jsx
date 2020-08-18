import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

const PublicRouter = ({ path, exact, component }) => {
  const navigation = useHistory();
  const userType = localStorage.getItem("userType");

  useEffect(() => {
    if (userType !== null) {
      navigation.goBack();
    }
  }, [navigation, userType]);

  return <Route exact={exact} path={path} component={component} />;
};

export default PublicRouter;
