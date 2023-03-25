import react from "react";
import Container from "react-bootstrap/Container";

function SearchItemsCount(prop) {
  return (
    <Container className="searchItemsCountContainer">
      <em>"Found {prop.count} items"</em>
    </Container>
  );
}

export default SearchItemsCount;
