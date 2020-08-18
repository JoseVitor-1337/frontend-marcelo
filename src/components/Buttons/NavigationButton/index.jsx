import React from "react";

import "./style.css";

const NavigationButton = (props) => {
  return (
    <button onClick={props.action} className="navigation">
      {props.title}
    </button>
  );
};
export { NavigationButton };
