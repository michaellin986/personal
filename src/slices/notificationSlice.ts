import { createSlice } from "@reduxjs/toolkit";
import { NotificationType } from "../models/Notification";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [] as NotificationType[],
  },
  reducers: {
    createNotification: (state, action) => {
      state.notifications.push({
        message: action.payload.message,
        type: action.payload.type,
      });
    },
  },
});

export const { createNotification } = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
