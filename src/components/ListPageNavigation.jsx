import React, { useEffect, useRef } from "react";

import Container from "react-bootstrap/esm/Container";

function ListPageNavigation(prop) {
  let pageNumberArray = [];
  let currentPage = +prop.currentPage;
  let pageNumberMappedArray = [];
  const firstArray = ["First"];
  const lastArray = ["Last"];
  const previousNumberMappedArray = useRef();

  useEffect(() => {
    previousNumberMappedArray.current = pageNumberMappedArray;
  }, [pageNumberMappedArray]);

  if (+prop.numberOfPages <= 9) {
    for (let i = 1; i <= +prop.numberOfPages; i++) {
      pageNumberArray.push(i);
    }
    pageNumberMappedArray = pageNumberArray;
  } else {
    if (currentPage == previousNumberMappedArray.current[1]) {
      if (currentPage <= 3) {
        for (let i = 1; i <= 9; i++) {
          pageNumberArray.push(i);
        }
        pageNumberMappedArray = [...pageNumberArray, ...lastArray];
      } else {
        for (let i = currentPage - 1; i <= currentPage + 6; i++) {
          pageNumberArray.push(i);
        }
        pageNumberMappedArray = [
          ...firstArray,
          ...pageNumberArray,
          ...lastArray,
        ];
      }
    } else if (
      currentPage ==
      previousNumberMappedArray.current[
        previousNumberMappedArray.current.length - 2
      ]
    ) {
      if (currentPage >= +prop.numberOfPages - 2) {
        for (let i = +prop.numberOfPages - 8; i <= +prop.numberOfPages; i++) {
          pageNumberArray.push(i);
        }
        pageNumberMappedArray = [...firstArray, ...pageNumberArray];
      } else {
        for (let i = currentPage - 6; i <= currentPage + 1; i++) {
          pageNumberArray.push(i);
        }
        pageNumberMappedArray = [
          ...firstArray,
          ...pageNumberArray,
          ...lastArray,
        ];
      }
    } else if (currentPage == 1) {
      for (let i = 1; i <= 9; i++) {
        pageNumberArray.push(i);
      }
      pageNumberMappedArray = [...pageNumberArray, ...lastArray];
    } else if (currentPage == +prop.numberOfPages) {
      for (let i = +prop.numberOfPages - 8; i <= +prop.numberOfPages; i++) {
        pageNumberArray.push(i);
      }
      pageNumberMappedArray = [...firstArray, ...pageNumberArray];
    } else {
      pageNumberMappedArray = previousNumberMappedArray.current;
    }
  }

  if (pageNumberMappedArray[0] < 1 || pageNumberMappedArray[1] < 1) {
    pageNumberArray = [];
    for (let i = 1; i <= 9; i++) {
      pageNumberArray.push(i);
    }
    pageNumberMappedArray = [...pageNumberArray, ...lastArray];
  }

  return (
    <Container className="listPageNavigationContainer">
      {pageNumberMappedArray.map((pageNumber, pageIndex) => (
        <button
          key={pageIndex}
          className={
            pageNumber === currentPage
              ? "listPageNavigationCurrentButton"
              : "listPageNavigationButton"
          }
          onClick={prop.chooseCurrentPage}
          value={pageNumber}
        >
          {pageNumber}
        </button>
      ))}
    </Container>
  );
}

export default ListPageNavigation;
