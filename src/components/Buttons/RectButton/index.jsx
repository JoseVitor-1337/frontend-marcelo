import React, { memo } from "react";

import "./style.css";

const RectButton = (props) => {
  return (
    <button onClick={props.action} className="rect">
      {props.title}
    </button>
  );
};

export default memo(RectButton);
