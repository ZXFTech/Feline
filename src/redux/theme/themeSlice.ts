import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    color: "#f9f7f0",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.color;

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
