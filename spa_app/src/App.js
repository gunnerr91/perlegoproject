import { localhost } from "./constants";
import "./styles/App.css";
import Banner from "./components/Banner";
import Book from "./components/Book";
import useFetch from "./useFetch";

export const booksYouMightLike = "Books you might like";

const App = () => {
  const { books, error } = useFetch(`${localhost}books`);
  return (
    <div>
      <section className="banner">
        <Banner title={booksYouMightLike} />
      </section>
      <section className="basic-grid">
        {error && <h3>{error}</h3>}
        {books &&
          books.map((book, index) => (
            <Book
              key={index}
              title={book.title}
              author={book.author}
              location={book.location}
              coverFile={book.coverFile}
            />
          ))}
      </section>
    </div>
  );
};

export default App;
