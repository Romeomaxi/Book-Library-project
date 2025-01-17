import React from "react";

const BookDetails = ({ book }) => {
  if (!book) {
    return <p>No book selected. Please go back and select a book to view its details.</p>;
  }

  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/300";

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={coverImage}
          alt={book.title}
          className="w-full md:w-1/3 object-cover shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-lg mb-2">
            <strong>Author:</strong> {book.author_name?.join(", ") || "Unknown"}
          </p>
          <p className="text-lg mb-2">
            <strong>Publisher:</strong> {book.publisher?.join(", ") || "Unknown"}
          </p>
          <p className="text-lg mb-2">
            <strong>Published:</strong> {book.first_publish_year || "Unknown"}
          </p>
          <p className="text-lg mb-2">
            <strong>ISBN:</strong> {book.isbn?.[0] || "Unavailable"}
          </p>
          <p className="text-lg mb-4">
            <strong>Number of Pages:</strong> {book.number_of_pages || "Unknown"}
          </p>
          <p className="text-lg">
            <strong>Description:</strong> {book.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
