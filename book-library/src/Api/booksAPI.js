export const fetchBooks = async (query) => {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch books.");
    }
    const data = await response.json();
    return data.docs;
  };
  