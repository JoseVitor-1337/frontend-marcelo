import React, { memo } from "react";

import "./style.css";

const UploadInput = (props) => {
  const { name, value, index, setValue, label } = props;

  return (
    <div className="upload-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        value={value}
        onChange={(event) => setValue(event.target.value, name, index)}
        name={name}
        id={name}
        required
      />
    </div>
  );
};

export default memo(UploadInput);
