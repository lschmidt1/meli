import { render, screen } from "../test-utils";
import Breadcrumbs from "../components/common/breadcrumbs";
import { categories } from "./mocks";

describe("<Breadcrumbs />", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<Breadcrumbs />);
      expect(component).toMatchSnapshot();
    });
  });

  test("renders categories when receiving categories props", () => {
    const initialState = {
      categories: categories,
    };
    render(<Breadcrumbs />, { initialState });
    expect(screen.getByRole("breadcrumbs")).toBeInTheDocument();
  });
});
