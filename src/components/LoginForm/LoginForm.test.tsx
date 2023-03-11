import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils";
import LoginForm from "./LoginForm";

describe("Given the LogInForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an input field with placeholder 'Email'", () => {
      const fieldName = "Email";

      renderWithProviders(<LoginForm />);

      const inputField = screen.getByPlaceholderText(fieldName);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field with placeholder 'password'", () => {
      const placeholderName = "Password";

      renderWithProviders(<LoginForm />);

      const inputField = screen.getByPlaceholderText(placeholderName);
      expect(inputField).toBeInTheDocument();
    });
  });
});
