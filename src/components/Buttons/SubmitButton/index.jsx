import React from "react";

import "./style.css";

const SubmitButton = (props) => {
  return (
    <button onClick={props.action} className="submit">
      {props.title}
    </button>
  );
};
export { SubmitButton };
