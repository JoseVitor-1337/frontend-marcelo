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
    let count = 0;
    let index = 0;
    const sizeOfPages = numberOfPages.length;
    const newChoosePages = [currentPage];

    if (sizeOfPages > 5) {
      do {
        if (count > 0) {
          count = count * -1;
        } else {
          count = count * -1;
          count++;
        }

        const pageIndex = currentPage - 1 + count;
        const hasPage = numberOfPages[pageIndex];

        if (newChoosePages.length < 5) {
          if (hasPage === 0) {
            console.log(currentPage, count, pageIndex, hasPage);
            if (count > 0) {
              newChoosePages.push(currentPage + count);
            } else {
              newChoosePages.unshift(currentPage + count);
            }
          }
        }

        index++;
      } while (index < 15);

      console.log(newChoosePages);
      setChoosePages(newChoosePages);
    } else {
      setChoosePages(numberOfPages);
    }
  }, [currentPage, numberOfPages]);

  return (
    <ul className="pagination">
      {choosePages.map((item, index) => {
        return (
          <li
            onClick={() => setCurrentPage(item)}
            key={index}
            className={`${currentPage === item ? "active" : ""}`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Pagination);
