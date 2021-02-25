import { render } from "enzyme";
import Book, { getCoverLocation } from "./Book";

describe("Book component", () => {
  const expectedAuthor = "author";
  const expectedTitle = "title";
  const expectedLocation = "location/";
  const expectedCoverFile = "1234";

  let component;
  beforeAll(() => {
    component = render(
      <Book
        title={expectedTitle}
        author={expectedAuthor}
        coverFile={expectedCoverFile}
        location={expectedLocation}
      />
    );
  });
  it("renders title and author", () => {
    const expectedAuthor = "author";
    const expectedTitle = "title";

    const component = render(
      <Book title={expectedTitle} author={expectedAuthor} />
    );

    expect(component.find("#title").text()).toContain(expectedTitle);
    expect(component.find("#author").text()).toContain(expectedAuthor);
  });

  it("constructs location of cover from props", () => {
    const location = getCoverLocation(expectedLocation, expectedCoverFile);

    expect(location).toBe(
      `https://www.perlego.com/${expectedLocation}${expectedCoverFile}`
    );
  });
});
