import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentials } from "../../types/userTypes";
import {
  LoginResponse,
  CustomTokenPayload,
  UseUserStructure,
} from "./userTypes";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}/user/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-type": "application/json",
      },
    });

    const { token } = (await response.json()) as LoginResponse;
    const tokenPayload: CustomTokenPayload = decodeToken(token);
    const { name } = tokenPayload;

    dispatch(loginUserActionCreator({ name, token, isLogged: false }));
  };

  return { loginUser };
};

export default useUser;
