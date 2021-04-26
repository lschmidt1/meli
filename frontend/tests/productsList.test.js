import { render, screen } from "../test-utils";
import ProductsList from "../components/productsList/productsList";
import { product } from "./mocks";

describe("<ProductsList />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<ProductsList />);
      expect(component).toMatchSnapshot();
    });
  });

  test("renders a list when receiving array props", () => {
    const initialState = {
      productsList: [{ product }, { product }],
    };
    render(<ProductsList />, { initialState });
    expect(screen.getByRole("productsList")).toBeInTheDocument();
  });
});
