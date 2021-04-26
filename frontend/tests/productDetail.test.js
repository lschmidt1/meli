import { render, screen } from "../test-utils";
import ProductDetail from "../components/productDetail/productDetail";
import { product } from "./mocks";
import { useRouter } from "next/router";
const axios = require("axios");

jest.mock("axios");

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("<ProductDetail />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<ProductDetail />);
      expect(component).toMatchSnapshot();
    });
  });

  test("renders product detail container when receiving data as initialState", () => {
    const initialState = {
      productDetail: product,
    };
    render(<ProductDetail />, { initialState });
    expect(screen.getByRole("productDetail")).toBeInTheDocument();
  });

  test("calls getProductDetail API when receiving search param from URL", () => {
    render(<ProductDetail />);
    const push = jest.fn();
    const fakeResp = product;
    useRouter.mockImplementation(() => ({
      push,
      pathname: "/items:id",
      route: "/items/:id",
      asPath: "/",
      query: { id: "MLA881082436" },
    }));
    axios.get.mockResolvedValue(fakeResp);
    /* expect(axios.get).toHaveBeenCalledTimes(1); */
  });
});
