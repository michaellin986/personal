import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoadingLogin: false,
    isLoadingLogout: false,
    error: "",
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoadingLogin = true;
    },
    loginSuccess: (state) => {
      state.isLoadingLogin = false;
    },
    loginFailure: (state, action) => {
      state.isLoadingLogin = false;
      state.error = action.payload.error;
    },
    logoutRequest: (state) => {
      state.isLoadingLogout = true;
    },
    logoutSuccess: (state) => {
      state.isLoadingLogout = false;
    },
    logoutFailure: (state, action) => {
      state.isLoadingLogout = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
