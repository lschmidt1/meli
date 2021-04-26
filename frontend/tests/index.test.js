import { render } from "../test-utils";
import App from "../pages/index";

describe("App", () => {
  describe("should render correctly", () => {
    test("by matching snapshot", () => {
      const component = render(<App />);
      expect(component).toMatchSnapshot();
    });
  });
});
