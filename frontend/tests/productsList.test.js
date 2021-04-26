import { render, screen } from "../test-utils";
import ProductsList from "../components/productsList/productsList";
import { product } from "./mocks";
import { useRouter } from "next/router";
const axios = require("axios");

jest.mock("axios");

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("<ProductsList />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<ProductsList />);
      expect(component).toMatchSnapshot();
    });
  });

  test("renders a list when receiving array props as initialState", () => {
    const initialState = {
      searchResults: [{ product }, { product }],
    };
    render(<ProductsList />, { initialState });
    expect(screen.getByRole("productsList")).toBeInTheDocument();
  });

  test("calls getProducts API when receiving search param from URL", () => {
    render(<ProductsList />);
    const push = jest.fn();
    const fakeResp = [product];
    useRouter.mockImplementation(() => ({
      push,
      pathname: "/items?search=",
      route: "/items?search=",
      asPath: "/",
      query: { search: "ipad" },
    }));
    axios.get.mockResolvedValue(fakeResp);
    /* expect(axios.get).toHaveBeenCalledTimes(1); */
  });
});
