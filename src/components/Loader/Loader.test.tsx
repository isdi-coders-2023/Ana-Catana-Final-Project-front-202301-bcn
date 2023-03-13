import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it renders", () => {
    test("Then it should show an image with the altenative text 'The page is loading'", () => {
      const ariaLabel = "The page is loading";

      renderWithProviders(<Loader />);

      const ariaLabelRendered = screen.getByRole("dialog", { name: ariaLabel });

      expect(ariaLabelRendered).toBeInTheDocument();
    });
  });
});
