import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onBookSelect={setSelectedBook} />} />
        <Route path="/details" element={<Details book={selectedBook} />} />
      </Routes>
    </Router>
  );
};

export default App;
