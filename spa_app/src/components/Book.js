import "../styles/book.css";

export const getCoverLocation = (location, coverFile) =>
  `https://www.perlego.com/${location}${coverFile}`;

const Book = ({ title, author, location, coverFile }) => {
  return (
    <div className="bookPanel">
      <img
        className="bookCover"
        src={getCoverLocation(location, coverFile)}
        id="cover"
        alt={title}
      />
      <div id="title">{title}</div>
      <div id="author" className="author">
        <em>{author}</em>
      </div>
    </div>
  );
};

export default Book;
