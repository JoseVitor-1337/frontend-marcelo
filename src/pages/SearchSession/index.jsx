import React, { useEffect, useState } from "react";
import { PaginationOnSearchSession } from "../../components/Paginations";

import "./style.css";

const SearchSession = () => {
  const [sessionQuestions, setSessionQuestions] = useState();

  useEffect(() => {}, []);

  return (
    <div className="sesseion-search-container">
      <div className="question">
        <p>Oh Hello There</p>
      </div>
      <div className="question-config">
        <PaginationOnSearchSession />
        <button className="end-session"></button>
      </div>
    </div>
  );
};

export default SearchSession;
