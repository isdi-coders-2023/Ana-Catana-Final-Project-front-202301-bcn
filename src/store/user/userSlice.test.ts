import { UserState } from "../../types/userTypes";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  const initialUserState: UserState = {
    name: "",
    token: "",
    isLogged: false,
  };

  describe("When it receives a user with isLogged status set on 'false' and a loging user action", () => {
    const userToLogin: UserState = {
      name: "janesmith",
      token: "def456hij789",
      isLogged: false,
    };

    const userLogged: UserState = {
      name: "janesmith",
      token: "def456hij789",
      isLogged: true,
    };

    test("Then it should return a user with isLogged status set on 'true'", () => {
      const loginUserAction = loginUserActionCreator(userToLogin);
      const newLoginUser = userReducer(initialUserState, loginUserAction);

      expect(newLoginUser).toStrictEqual(userLogged);
    });
  });
});
