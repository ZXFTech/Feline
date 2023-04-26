import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: true, // true for dark
  },
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.value;

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
