import React, { useState, useEffect, useRef, useContext } from "react";
import ListItemHeader from "./ListItemHeader";
import Container from "react-bootstrap/Container";
import ListItem from "./ListItem";
import ListPageNavigation from "./ListPageNavigation";
import { SearchInputContext } from "./Search";

function ListItems(prop) {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setFirstLoad(false);
    }, 3000);
  }, []);

  const searchInput = useContext(SearchInputContext);

  const postsPerPage = 10;

  const previousCurrentPage = useRef();
  useEffect(() => {
    previousCurrentPage.current = currentPage;
  }, [currentPage]);

  const products = prop.products;

  const numberOfProducts = products.length;

  useEffect(
    () => prop.setSearchItemsCount(numberOfProducts),
    [numberOfProducts]
  );

  const numberOfPages = Math.ceil(numberOfProducts / postsPerPage);

  // useEffect(() => {
  //   setFirstLoad(true);
  // }, []);

  useEffect(() => {
    setCurrentPage("1");
  }, [numberOfPages]);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = currentPage * postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  function chooseCurrentPage(event) {
    const buttonPressed = event.target.value;
    if (buttonPressed == "First") {
      setCurrentPage(1);
    } else if (buttonPressed == "Last") {
      setCurrentPage(numberOfPages);
    } else {
      setCurrentPage(event.target.value);
    }
  }

  let savedItemArray = [];
  function saveItem(savedItem) {
    savedItemArray.push(savedItem);
    savedItemArray = [...new Set(savedItemArray)];
    prop.saveItemArray(savedItemArray);
  }

  return (
    <React.Fragment>
      {currentPosts.map((product, index) => (
        <Container
          key={prop.searchInput + String(index) + "C"}
          className="listItemBox"
          style={{ padding: "0" }}
        >
          <ListItemHeader
            key={searchInput + String(index) + currentPage + "LIH"}
            name={product.name}
            id={product.id}
            price={product.price}
            index={index}
          />
          <ListItem
            key={searchInput + String(index) + "LI"}
            id={product.id}
            name={product.name}
            energy={product.energy}
            carbohydrate={product.carbohydrate}
            protein={product.protein}
            totalFat={product.totalFat}
            percentageCarbohydrate={product.percentageCarbohydrate}
            percentageProtein={product.percentageProtein}
            percentageTotalFat={product.percentageTotalFat}
            saveItem={saveItem}
            index={index}
          />
        </Container>
      ))}

      <ListPageNavigation
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        chooseCurrentPage={chooseCurrentPage}
      />
      <div
        className="listItemsNoProducts"
        style={{
          display:
            currentPosts.length === 0
              ? firstLoad === true
                ? "block"
                : "none"
              : "none",
        }}
      >
        <h1 style={{ fontSize: "0.9rem" }}>Searching for products...</h1>
        <h1 style={{ fontSize: "0.7rem" }}>
          {Math.ceil(Math.random() * 3) === 1
            ? "Arranging them on the shelf..."
            : Math.ceil(Math.random() * 3) === 2
            ? "Scanning them at the checkout..."
            : "Pushing them in your shopping cart..."}
        </h1>
      </div>
      <div
        className="listItemsNoProducts"
        style={{
          display:
            currentPosts.length === 0
              ? firstLoad === false
                ? "block"
                : "none"
              : "none",
        }}
      >
        <h1 style={{ fontSize: "0.9rem" }}>
          Sorry! We could not find any results
        </h1>
        <h1 style={{ fontSize: "0.7rem" }}>Try widening your search filters</h1>
      </div>
    </React.Fragment>
  );
}

export default ListItems;
