import { useAppDispatch } from "../../store/hooks";
import decodeToken from "jwt-decode";
import {
  closeLoaderactionCreator,
  hideFeedbackActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentials } from "../../types/userTypes";
import {
  CustomTokenPayload,
  LoginResponse,
  UseUserStructure,
} from "./userTypes";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL!;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(showLoaderActionCreator());

      dispatch(hideFeedbackActionCreator({ message: "", isSuccessful: false }));
      const response = await fetch(`${apiUrl}/users/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      const { token }: LoginResponse = await response.json();
      const tokenPayload: CustomTokenPayload = decodeToken(token);
      const { name } = tokenPayload;

      dispatch(loginUserActionCreator({ name, token, isLogged: false }));
      localStorage.setItem("token", token);

      dispatch(closeLoaderactionCreator());
    } catch {
      dispatch(closeLoaderactionCreator());

      dispatch(
        showFeedbackActionCreator({
          message: "Invalid credentials. Please try again.",
          isSuccessful: false,
        })
      );
    }
  };

  return { loginUser };
};

export default useUser;
