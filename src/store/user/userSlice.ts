import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserStructure } from "../../types/userTypes";

const initialState: UserState = {
  name: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<UserStructure>
    ): UserState => ({
      ...currentUserState,
      token: action.payload.token,
      isLogged: true,
      name: action.payload.name,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
