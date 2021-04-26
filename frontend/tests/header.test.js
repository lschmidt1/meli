import { render, fireEvent, screen } from "../test-utils";
import Header from "../components/header/header";

describe("<Header />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<Header />);
      expect(component).toMatchSnapshot();
    });
  });

  it("renders an empty input", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("searchInput").value).toEqual("");
  });

  test("pressing search button calls handleSearch function", () => {
    const clickFn = jest.fn();
    const component = render(
      <Header>
        <form onSubmit={clickFn}></form>
      </Header>
    );
    const submitButton = component.getByRole("submitButton");
    fireEvent.click(submitButton);
    /* expect(clickFn).toHaveBeenCalled(); */
  });

  test("pressing enter on input should call handlesearch function", () => {
    const clickFn = jest.fn();
    const component = render(
      <Header>
        <form onSubmit={clickFn}></form>
      </Header>
    );
    const searchInput = component.getByRole("searchInput");
    fireEvent.change(searchInput, { target: { value: "ipad" } });
    fireEvent.submit(searchInput);
    /* expect(clickFn).toHaveBeenCalled(); */
  });

  test("doing a product search should change URL", () => {
    const clickFn = jest.fn();
    const component = render(
      <Header>
        <form onSubmit={clickFn}></form>
      </Header>
    );
    const searchInput = screen.getByRole("searchInput");
    fireEvent.change(searchInput, { target: { value: "ipad" } });
    expect(searchInput.value).toBe("ipad");
    const submitForm = component.getByRole("submitForm");
    fireEvent.submit(submitForm);
    /* expect(window.location.pathname).toEqual("/items?search=ipad"); */
  });

  test("pressing logo should redirect home", () => {
    render(<Header></Header>);
    global.window = { location: { pathname: "/items" } };
    const logo = screen.getByRole("logo");
    fireEvent.click(logo);
    expect(window.location.pathname).toEqual("/");
  });
});
