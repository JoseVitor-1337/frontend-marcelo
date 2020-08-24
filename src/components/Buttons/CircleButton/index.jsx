import React, { memo } from "react";

import "./style.css";

const CircleButton = (props) => {
  return (
    <button onClick={props.action} className="circle">
      {props.title}
    </button>
  );
};

export default memo(CircleButton);
