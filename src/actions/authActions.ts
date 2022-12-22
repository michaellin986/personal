import { Dispatch } from "redux";
import axios from "axios";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "../slices/authSlice";
import { createNotification } from "../slices/notificationSlice";

export const login =
  (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(loginRequest());
    axios
      .post("/auth/login/", { email, password })
      .then((response) => {
        localStorage.setItem(
          "michaellin-personal-api-token",
          response.data.key
        );
        dispatch(loginSuccess());
        window.location.reload();
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
        dispatch(
          createNotification({
            message: "Login failed. Please try again.",
            type: "error",
          })
        );
      });
  };

export const logout = () => (dispatch: Dispatch) => {
  dispatch(logoutRequest());
  axios
    .post("/auth/logout/")
    .then(() => {
      localStorage.removeItem("michaellin-personal-api-token");
      dispatch(logoutSuccess());
      window.location.reload();
    })
    .catch((error) => {
      dispatch(logoutFailure(error.message));
      dispatch(
        createNotification({
          message: "Logout failed. Please try again.",
          type: "error",
        })
      );
    });
};
