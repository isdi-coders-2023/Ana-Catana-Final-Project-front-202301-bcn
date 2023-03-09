import decodeToken from "jwt-decode";
import { renderHook, act } from "@testing-library/react";
import { server } from "../../mocks/server";
import { UserCredentials, UserState } from "../../types/userTypes";
import useUser from "./useUser";
import { Wrapper } from "../../mocks/Wrapper";
import { CustomTokenPayload } from "./userTypes";
import { loginUserActionCreator } from "../../store/user/userSlice";

beforeAll(() => {
  jest.clearAllMocks();
  server.listen();
});

afterAll(() => {
  server.close();
});

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

jest.mock("jwt-decode", () => jest.fn());

const mockedToken = "mockedToken";

const mockedTokenPayload: CustomTokenPayload = {
  id: "",
  name: "Alina",
  email: "alina@gmail.com",
};

const userCredentials: UserCredentials = {
  email: "alina@gmail.com",
  password: "12345678",
};

describe("Given a useUser custom hook", () => {
  describe("When its funcion 'loginUser' is called with the email 'alina@gmail.com' and password '12345678'", () => {
    test("Then it should dispatch the action to login the user", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockedTokenPayload
      );

      const mockedUser: UserState = {
        name: "Alina",
        token: mockedToken,
        isLogged: false,
      };

      await act(async () => loginUser(userCredentials));

      expect(mockDispatcher).toHaveBeenCalledWith(
        loginUserActionCreator(mockedUser)
      );
    });
  });
});
