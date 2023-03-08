import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import generalTheme from "../../styles/generalTheme";

describe("Given Button component", () => {
  describe("When it receives the text 'Login'", () => {
    test("Then it should show a button with the text 'Login'", () => {
      const text = "Login";

      render(
        <ThemeProvider theme={generalTheme}>
          <Button text={"Login"} />
        </ThemeProvider>
      );
      const expectedButton = screen.getByRole("button", {
        name: text,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
