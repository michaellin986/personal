import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { mapReducer } from "./slices/mapSlice";
import { notificationReducer } from "./slices/notificationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    map: mapReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
