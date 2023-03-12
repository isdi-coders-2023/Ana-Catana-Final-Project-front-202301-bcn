import { screen } from "@testing-library/react";
import renderWithProviders from "../testUtils";
import LoginPage from "./LoginPage";

const emailPlaceholder = "Email";
const passwordPlaceholder = "Password";

describe("Given a 'LoginPage' component", () => {
  describe("When rendered", () => {
    test("Then it should show an email and password field", () => {
      renderWithProviders(<LoginPage />);

      const emailInput = screen.getByPlaceholderText(emailPlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });
});
