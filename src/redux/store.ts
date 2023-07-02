import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import userReducer from "./theme/userSlice";

// import counterReduce from "./counter/counterSlice";
// import postSlice from "./posts/postSlice";
// import userReducer from "./users/usersSlice";

// export default configureStore({
//   reducer: { counter: counterReduce, posts: postSlice, users: userReducer },
// });

// 创建 store,里面包含所有的 reducer
export const store = configureStore({
  reducer: { theme: themeReducer, user: userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
