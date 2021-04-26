import { render, screen } from "../test-utils";
import ProductCard from "../components/common/productCard";
import { product } from "./mocks";

describe("<ProductCard />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<ProductCard />);
      expect(component).toMatchSnapshot();
    });
  });

  test("should render product card when receiving props", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByRole("productCard")).toBeInTheDocument();
  });

  test("should not render product when not receiving props", () => {
    const { queryByRole } = render(<ProductCard />);
    const productCard = queryByRole("productCard");
    expect(productCard).toBeNull();
  });
});
