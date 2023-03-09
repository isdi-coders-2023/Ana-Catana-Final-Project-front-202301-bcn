import { type JwtPayload } from "jwt-decode";
import { UserCredentials } from "../types/userTypes";

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  name: string;
  email: string;
}

export interface UseUserStructure {
  loginUser: (userCredencials: UserCredentials) => Promise<void>;
}
