import React from "react";

function Pagination() {
  return (
    <div data-test-id="pagination-contsiner">
      {/* This is the button to switch to the prev page */}
      <button data-test-id="prev-pagination">Previous</button>
      {/* This is the button to switch to the next page */}
      <button data-test-id="next-pagination">Next</button>
      {/* This is the button that shows all the pages */}
      <button data-test-id="number-pagination">1</button>
      <button data-test-id="number-pagination">2</button>
      <button data-test-id="number-pagination">3</button>
      <button data-test-id="number-pagination">4</button>
      <button data-test-id="number-pagination">5</button>
    </div>
  );
}

export default Pagination;
