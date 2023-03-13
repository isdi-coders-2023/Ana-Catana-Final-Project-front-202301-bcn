import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import Header from "./Header";

describe("Given an Header component", () => {
  describe("When it renders", () => {
    test("Then it should show the test 'JobTrail'", () => {
      const headingText = "JobTrail";

      renderWithProviders(<Header />);

      const mainHeading = screen.getByRole("heading", { name: headingText });

      expect(mainHeading).toBeInTheDocument();
    });
  });
});
