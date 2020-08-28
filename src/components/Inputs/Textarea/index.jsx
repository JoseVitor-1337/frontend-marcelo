import React, { memo } from "react";

import "./style.css";

const Textarea = (props) => {
  const { name, value, setValue, label } = props;

  return (
    <div className="textarea-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></textarea>
    </div>
  );
};

export default memo(Textarea);
