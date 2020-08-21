import React, { memo } from "react";

import "./style.css";

const TextInput = (props) => {
  const { name, pattern, value, setValue, label } = props;

  function validateValueOfInputField(event) {
    const span = document.getElementById(`message-${name}`);
    const input = document.getElementById(event.target.id);

    const hasMatch = value.match(pattern);

    if (hasMatch !== null) {
      span.style.display = "none";
      input.style.borderColor = "var(--shadow-color)";
    } else {
      span.style.display = "inline";
      input.style.borderColor = "var(--text-error-color)";
    }
  }

  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label} <span id={`message-${name}`}>formato incorreto!</span>
      </label>
      <input
        onBlur={validateValueOfInputField}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name={name}
        id={name}
        pattern={pattern ? pattern : ".{1,}"}
        required
        autoComplete="Off"
      />
    </div>
  );
};

export default memo(TextInput);
