import { shallow } from "enzyme";
import Banner from "./Banner";

describe("Banner component", () => {
  it("renders the correct title when all books are laoded", () => {
    const expectedTitle = "title";
    const component = shallow(<Banner title={expectedTitle} />);
    expect(component.find("#bannerTitle").text()).toBe(expectedTitle);
  });
});
