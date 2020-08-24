import React, { useEffect, useState, memo } from "react";

import "./style.css";

const Pagination = (props) => {
  const { maxItems, itemsPerPage } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages] = useState(getNumberOfPages);
  const [choosePages, setChoosePages] = useState([]);

  function getNumberOfPages() {
    let numberOfPages = maxItems / itemsPerPage;

    if (numberOfPages > Math.round(numberOfPages)) {
      numberOfPages = Math.round(numberOfPages) + 1;
    } else {
      numberOfPages = Math.round(numberOfPages);
    }

    const arrayRepresentNumberOfPages = Array(numberOfPages).fill(0);

    return arrayRepresentNumberOfPages;
  }

  useEffect(() => {
    if (numberOfPages.length > 5) {
    } else {
      setChoosePages(numberOfPages);
    }
  }, [numberOfPages]);

  return (
    <ul className="pagination">
      {choosePages.map((item, index) => {
        const page = index + 1;

        return (
          <li
            onClick={() => setCurrentPage(page)}
            key={index}
            className={`${currentPage === page ? "active" : ""}`}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Pagination);
