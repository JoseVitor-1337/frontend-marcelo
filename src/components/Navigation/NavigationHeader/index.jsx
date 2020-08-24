import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavigationHeader = (props) => {
  const { items } = props;
  return (
    <nav>
      {items.map((item) => {
        const { to, title } = item;

        return (
          <Link key={to} to={to} href="/">
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default memo(NavigationHeader);
