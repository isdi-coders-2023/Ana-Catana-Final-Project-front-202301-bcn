import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import generalTheme from "../../styles/generalTheme";
import GlobalStyles from "../../styles/GlobalStyles";
import LoginForm from "./LoginForm";

describe("Given the LogInForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an input field with placeholder 'Email'", () => {
      const fieldName = "Email";

      render(
        <ThemeProvider theme={generalTheme}>
          <LoginForm />
        </ThemeProvider>
      );

      const inputField = screen.getByPlaceholderText(fieldName);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field with placeholder 'password'", () => {
      const placeholderName = "Password";

      render(
        <ThemeProvider theme={generalTheme}>
          <GlobalStyles />
          <LoginForm />
        </ThemeProvider>
      );

      const inputField = screen.getByPlaceholderText(placeholderName);
      expect(inputField).toBeInTheDocument();
    });
  });
});
