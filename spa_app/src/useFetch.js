import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [endpoint]);
  return {
    books,
    error
  };
};

export default useFetch;
