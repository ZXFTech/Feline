import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    avatar: "",
    sex: null,
    isLogin: false,
  },
  reducers: {
    logout: (state) => {
      state = {
        username: "",
        email: "",
        avatar: "",
        sex: null,
        isLogin: false,
      };
    },
    login: (state, action) => {
      state.username = action.payload.username;
      state.avatar = action.payload.avatar;
      state.email = action.payload.email;
      state.sex = action.payload.sex;
      state.isLogin = true;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
