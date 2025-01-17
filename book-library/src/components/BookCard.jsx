import React from "react";

const BookCard = ({ book, onClick }) => {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div
      onClick={() => onClick(book)}
      className="border rounded shadow-md p-4 hover:bg-gray-100 cursor-pointer"
    >
      <img src={coverImage} alt={book.title} className="w-full h-48 object-cover" />
      <h2 className="font-bold mt-2">{book.title}</h2>
      <p className="text-gray-600">Author: {book.author_name?.join(", ") || "Unknown"}</p>
    </div>
  );
};

export default BookCard;
