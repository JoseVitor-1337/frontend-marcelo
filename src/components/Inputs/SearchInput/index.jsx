import React, { memo } from "react";

import "./style.css";

const SearchInput = (props) => {
  const { name, value, setValue, placeholder, makeSearch } = props;

  function handleDebounce() {
    let timer = null;

    return function (value) {
      clearTimeout(timer);

      console.log("Clear");

      timer = setTimeout(() => {
        console.log("Execute");
        makeSearch(value);
      }, 1000);
    };
  }

  function handleKeyUpEvent(event) {
    const debounce = handleDebounce();

    debounce(event.target.value);
  }

  return (
    <div className="search-group">
      <input
        type="text"
        value={value}
        onKeyUp={(event) => handleKeyUpEvent(event)}
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
