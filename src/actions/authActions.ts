import { Dispatch } from "redux";
import axios from "../Api";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "../slices/authSlice";

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
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };

export const logout = () => (dispatch: Dispatch) => {
  dispatch(logoutRequest());
  axios
    .post("/auth/logout/")
    .then((response) => {
      localStorage.removeItem("michaellin-personal-api-token");
      dispatch(logoutSuccess());
    })
    .catch((error) => {
      dispatch(logoutFailure(error.message));
    });
};