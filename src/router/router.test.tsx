import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../store";
import generalTheme from "../styles/generalTheme";
import { routes } from "./router";

describe("Given a router", () => {
  describe("When being in the 'user/login path'", () => {
    test("Then it should display the placeholder text 'Email'", () => {
      const placeholderText = "Email";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/user/login"],
      });

      render(
        <Provider store={store}>
          <ThemeProvider theme={generalTheme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </Provider>
      );

      const expectedPlaceholderText =
        screen.getByPlaceholderText(placeholderText);

      expect(expectedPlaceholderText).toBeInTheDocument();
    });
  });
});
