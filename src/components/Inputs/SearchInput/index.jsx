import React, { memo } from "react";

import "./style.css";

const SearchInput = (props) => {
  const { name, value, setValue } = props;

  return (
    <div className="input-group">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name={name}
        id={name}
        required
        autoComplete="Off"
        placeholder=""
      />
    </div>
  );
};

export default memo(SearchInput);
