import React, { useState } from "react";
import { fetchBooks } from "../Api/booksAPI";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const Home = ({ onBookSelect }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const results = await fetchBooks(query);
      setBooks(results);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1><center>Welcome to our Place</center></h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {error ? (
          <p className="col-span-full text-red-500">{error}</p>
        ) : books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.key} book={book} onClick={onBookSelect} />
          ))
        ) : (
          <p className="col-span-full text-center">Try to search any Book you want please!!!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
