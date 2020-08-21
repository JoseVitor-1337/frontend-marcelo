import React, { memo } from "react";

import "./style.css";

const CheckBoxInput = (props) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id="check" />
      <label htmlFor="check">{props.label}</label>
    </div>
  );
};

export default memo(CheckBoxInput);
