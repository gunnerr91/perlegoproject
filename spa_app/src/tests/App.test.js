import { shallow } from "enzyme";
import App, { booksYouMightLike } from "../App";
import Book from "../components/Book";
import Banner from "../components/Banner";

const bookObjectToAssert = {
  expectedTitle: "expectedTitle",
  expectedAuthor: "expectedAuthor",
  expectedCoverFile: "expectedCoverFile",
  expectedLocation: "expectedLocation/"
};

jest.mock("../useFetch", () => () => ({
  books: [
    {
      location: bookObjectToAssert.expectedLocation,
      coverFile: bookObjectToAssert.expectedCoverFile,
      title: bookObjectToAssert.expectedTitle,
      author: bookObjectToAssert.expectedAuthor
    },
    { location: "local", coverFile: "cover", title: "title", author: "author" }
  ],
  error: { message: "unable to fetch" }
}));

describe("app component", () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(<App />);
  });

  it("renders expected amount of book components", () => {
    expect(renderedComponent.find(Book)).toHaveLength(2);
  });

  it("renders a banner with the books you might like title", () => {
    expect(renderedComponent.find(Banner).prop("title")).toBe(
      booksYouMightLike
    );
  });

  it("book components mapped with props", () => {
    let firstBook = renderedComponent.find(Book).get(0);
    expect(firstBook.props.title).toBe(bookObjectToAssert.expectedTitle);
    expect(firstBook.props.author).toBe(bookObjectToAssert.expectedAuthor);
    expect(firstBook.props.location).toBe(bookObjectToAssert.expectedLocation);
    expect(firstBook.props.coverFile).toBe(
      bookObjectToAssert.expectedCoverFile
    );
  });
});
