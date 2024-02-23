import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import sidebarReducer from "./features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {user:userReducer,sidebar:sidebarReducer},
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch