import UserStructure from "../../types/userTypes";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  const initialUserState: UserStructure = {
    name: "",
    token: "",
    email: "",
    isLogged: true,
  };

  describe("When it receives a user with isLogged status set on 'false'", () => {
    const userToLogin: UserStructure = {
      name: "janesmith",
      token: "def456hij789",
      email: "janesmith@example.com",
      isLogged: false,
    };

    const userLogged: UserStructure = {
      name: "janesmith",
      token: "def456hij789",
      email: "janesmith@example.com",
      isLogged: true,
    };

    test("Then it should return a user with isLogged status set on 'true'", () => {
      const loginUser = loginUserActionCreator(userToLogin);
      const newLoginUser = userReducer(initialUserState, loginUser);

      expect(newLoginUser).toStrictEqual(userLogged);
    });
  });
});
