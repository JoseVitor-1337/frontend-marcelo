import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavigationItem = (props) => {
  const { to, title } = props;
  return (
    <div className="navigation-item">
      <Link to={to} href="/">
        {title}
      </Link>
    </div>
  );
};

export default memo(NavigationItem);
