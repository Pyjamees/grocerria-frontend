import React, { useState, useEffect, createContext, useRef } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import SearchItemsCount from "./SearchItemsCount";
import SearchRangeSlider from "./SearchRangeSlider";
import List from "./List";
import Footer from "./Footer";

export const SearchInputContext = createContext("");

function Search(prop) {
  const [searchInput, setSearchInput] = useState("");
  const [sortCategory, setSortCategory] = useState("");
  const [sortOrder, setSortOrder] = useState(1);
  const [products, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [macroRangeArray, setMacroRangeArray] = useState([
    0, 100, 0, 100, 0, 100,
  ]);

  let searchTimeout = useRef(0);
  useEffect(() => {
    searchTimeout.current = searchTimeout;
  }, [searchTimeout]);

  // useEffect(() => {
  //   fetchData([searchInput, sortCategory, sortOrder, ...macroRangeArray]);
  // }, []);

  useEffect(() => {
    fetchData([searchInput, sortCategory, sortOrder, ...macroRangeArray]);
  }, [macroRangeArray]);

  async function fetchData([
    fetchSearchInput,
    fetchSortCategory,
    fetchSortOrder,
    fetchCarbohydrateMinimum,
    fetchCarbohydrateMaximum,
    fetchProteinMinimum,
    fetchProteinMaximum,
    fetchTotalFatMinimum,
    fetchTotalFatMaximum,
  ]) {
    const response = await axios.get(
      `https://grocer-ria-api.onrender.com/products/${fetchSearchInput}&${fetchSortCategory}&${fetchSortOrder}&${fetchCarbohydrateMinimum}&${fetchCarbohydrateMaximum}&${fetchProteinMinimum}&${fetchProteinMaximum}&${fetchTotalFatMinimum}&${fetchTotalFatMaximum}`
    );
    setProduct(response.data);
    setSearchInput(fetchSearchInput);
  }

  function updateSearchInput(input) {
    clearTimeout(searchTimeout);
    setSortCategory("");
    searchTimeout = setTimeout(() => {
      fetchData([input.target.value, "", 1, ...macroRangeArray]);
    }, 750);
  }

  function saveItemArray(savedItemArray) {
    prop.saveItemArray(savedItemArray);
  }

  function setSearchItemsCount(counter) {
    setCount(counter);
  }

  function updateSortCategoryOrder(categoryOrder) {
    setSortCategory(categoryOrder[0]);
    setSortOrder(categoryOrder[1]);
    fetchData([
      searchInput,
      categoryOrder[0],
      categoryOrder[1],
      ...macroRangeArray,
    ]);
  }

  function updateMacroRange(array) {
    setMacroRangeArray(array);
  }

  return (
    <div style={{ width: "100%", position: "relative", zIndex: "0" }}>
      <Container className="searchContainer">
        <Form className="d-flex searchForm">
          <input
            type="search"
            placeholder="Search for a product..."
            className="searchInput"
            aria-label="Search"
            onChange={updateSearchInput}
          ></input>
        </Form>
      </Container>
      <SearchRangeSlider updateMacroRange={updateMacroRange} />
      <SearchItemsCount count={count} />
      <SearchInputContext.Provider value={searchInput}>
        <List
          products={products}
          saveItemArray={saveItemArray}
          setSearchItemsCount={setSearchItemsCount}
          updateSortCategoryOrder={updateSortCategoryOrder}
        />
      </SearchInputContext.Provider>
      <Footer />
    </div>
  );
}

export default Search;
