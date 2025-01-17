import React from "react";
import BookDetails from "../components/BookDetails";

const Details = ({ book }) => {
  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
};

export default Details;
