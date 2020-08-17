import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

const AdminsiterRoutes = ({ path, exact, component }) => {
  const navigation = useHistory();
  const userType = localStorage.getItem("userType");

  useEffect(() => {
    if (userType !== "administer") {
      navigation.goBack();
    }
  }, [userType]);

  return <Route exact={exact} path={path} component={component} />;
};

export default AdminsiterRoutes;
