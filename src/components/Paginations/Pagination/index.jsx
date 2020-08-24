import React, { useEffect, useState, memo } from "react";

import "./style.css";

const Pagination = (props) => {
  const { maxItems, itemsPerPage } = props;
  const [pages, setPages] = useState([]);

  useEffect(() => {

    let numberOfPages = maxItems / itemsPerPage;

    if (numberOfPages > Math.round(numberOfPages)) {
      numberOfPages = Math.round(numberOfPages) + 1;
    } else {
      numberOfPages = Math.round(numberOfPages);
    }

    const arrayRepresentNumberOfPages = Array(numberOfPages).fill(0);

    if (pages.length !== arrayRepresentNumberOfPages.length) {
      setPages(arrayRepresentNumberOfPages);
    }
  }, [itemsPerPage, maxItems, pages]);

  return (
    <ul className="pagination">
      {pages.map((page, index) => {
        return (
          <li key={index} className="item">
            {index + 1}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Pagination);
