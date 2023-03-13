import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("when it renders", () => {
    test("Then it should show innside an h1 heading the text 'JobTrail'", () => {
      const headingText = "JobTrail";

      renderWithProviders(<Layout />);
      const mainHeader = screen.getByText(headingText);

      expect(mainHeader).toBeInTheDocument();
    });
  });
});
