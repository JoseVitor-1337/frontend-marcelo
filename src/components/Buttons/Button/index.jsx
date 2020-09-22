import React, { memo } from "react";

import "./style.css";

const Button = (props) => {
  const { title, action, type } = props;

  return (
    <button type="button" className={type} onClick={action}>
      {title}
    </button>
  );
};

export default memo(Button);
