import React, { memo } from "react";

import "./style.css";

const Select = ({ name, value, setValue, label, options, index }) => {
  return (
    <div className="select-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={(event) => setValue(event.target.value, name, index)}
        required
      >
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
