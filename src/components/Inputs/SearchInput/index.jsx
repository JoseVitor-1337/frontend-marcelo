import React, { memo } from "react";

import "./style.css";

const SearchInput = (props) => {
  const { name, value, setValue, placeholder } = props;

  return (
    <div className="search-group">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete="Off"
      />
    </div>
  );
};

export default memo(SearchInput);
