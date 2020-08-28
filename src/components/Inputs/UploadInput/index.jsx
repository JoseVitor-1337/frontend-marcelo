import React, { memo } from "react";

import "./style.css";

const UploadInput = (props) => {
  const { name, value, setValue, label } = props;

  console.log(value);

  return (
    <div className="upload-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        onChange={(event) => setValue(event.target.value)}
        name={name}
        id={name}
        required
      />
    </div>
  );
};

export default memo(UploadInput);
