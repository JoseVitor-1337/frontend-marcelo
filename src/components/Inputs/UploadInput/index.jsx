import React, { memo, useMemo } from "react";

import "./style.css";

const UploadInput = (props) => {
  const { name, value, index, setValue, label } = props;

  const preview = useMemo(() => {
    return value !== "" ? URL.createObjectURL(value) : "";
  }, [value]);

  console.log(preview);

  return (
    <div className="upload-group">
      <label
        style={{ backgroundImage: `url(${preview})` }}
        htmlFor={`${name} ${index}`}
      >{`${preview !== "" ? "" : label}`}</label>

      <input
        type="file"
        value={""}
        onChange={(event) => setValue(event.target.files[0], name, index)}
        name={name}
        id={`${name} ${index}`}
        required
      />
    </div>
  );
};

export default memo(UploadInput);
