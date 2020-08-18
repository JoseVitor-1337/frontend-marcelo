import React from "react";

import "./style.css";

const TextInput = (props) => {
  const inputs = {
    email: {
      pattern: "/^[Dd]{2,}[@][a-z]{2,}[.][a-z]{2,}/",
      name: "email",
    },
  };

  const { pattern, name } = inputs[props.type];

  return (
    <div className="input-group">
      <label htmlFor={name}>{props.label}</label>
      <input type="text" name={name} id={name} pattern={pattern} required />
    </div>
  );
};

export { TextInput };
