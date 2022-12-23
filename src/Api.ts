import axios from "axios";

const token = localStorage.getItem("michaellin-personal-api-token");

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  axios.defaults.baseURL = "http://localhost:8000/api/v1";
}

axios.defaults.headers.post["Content-Type"] = "application/json";
if (token) {
  axios.defaults.headers.common["Authorization"] =
    "Token " + localStorage.getItem("michaellin-personal-api-token");
}

export const loggedIn = () => {
  return !!localStorage.getItem("michaellin-personal-api-token");
};
