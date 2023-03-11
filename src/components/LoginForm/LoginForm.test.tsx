import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils";
import { UserCredentials } from "../../types/userTypes";
import LoginForm from "./LoginForm";

const mockedLoginUser = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Given the LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an input field with placeholder 'Email'", () => {
      const placeholderText = "Email";

      renderWithProviders(<LoginForm />);

      const inputField = screen.getByPlaceholderText(placeholderText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then it should show an input field with placeholder 'Password'", () => {
      const placeholderText = "Password";

      renderWithProviders(<LoginForm />);

      const inputField = screen.getByPlaceholderText(placeholderText);
      expect(inputField).toBeInTheDocument();
    });
  });

  describe("When the user types 'alina@gmail.com' in the 'email' input field", () => {
    test("Then it should show that exact text inside the input field", async () => {
      const placeholderText = "Email";
      const typedTextByUser = "alina@gmail.com";

      renderWithProviders(<LoginForm />);

      const emailInput: HTMLInputElement =
        screen.getByPlaceholderText(placeholderText);
      await userEvent.type(emailInput, typedTextByUser);

      expect(emailInput.value).toBe(typedTextByUser);
    });
  });

  describe("When the user submits the LoginForm", () => {
    test("Then it should call the handleSubmit function", async () => {
      const mockedUser: UserCredentials = {
        email: "alina@gmail.com",
        password: "12345678",
      };
      const submitButtonText = "Login";

      renderWithProviders(<LoginForm />);

      const submitLoginButton = screen.getByRole("button", {
        name: submitButtonText,
      });
      const emailInputField = screen.getByPlaceholderText("Email");
      const passwordImputField = screen.getByPlaceholderText("Password");

      await act(
        async () => await userEvent.type(emailInputField, mockedUser.email)
      );
      await act(
        async () =>
          await userEvent.type(passwordImputField, mockedUser.password)
      );
      await act(async () => await userEvent.click(submitLoginButton));

      expect(mockedLoginUser).toHaveBeenCalledWith(mockedUser);
    });
  });
});
