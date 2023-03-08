export interface UserStructure {
  name: string;
  email: string;
  token: string;
}

export interface UserState extends UserStructure {
  isLogged: boolean;
}

export interface UserCredentials {
  email: string;
  password: string;
}
