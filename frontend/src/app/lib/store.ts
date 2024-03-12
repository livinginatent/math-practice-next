import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import gameReducer from "./features/game/gameSlice";
import userSlice from "./features/user/userSlice";
import { userApi } from "@/services/userApi";
import { createWrapper } from "next-redux-wrapper";

export const store = () => configureStore({
  reducer: {
    game: gameReducer,
    sidebar: sidebarReducer,
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});


export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const wrapper = createWrapper<AppStore>(store, { debug: true });