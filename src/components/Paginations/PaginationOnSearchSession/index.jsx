import React, { memo } from "react";

import "./style.css";

const PaginationOnSearchSession = (props) => {
  return (
    <ul className="pagination-on-search">
      <li className="question-item"></li>
    </ul>
  );
};

export default memo(PaginationOnSearchSession);
