import { Dispatch } from "redux";
import axios from "../Api";
import {
  fetchAirportsRequest,
  fetchAirportsSuccess,
  fetchAirportsFailure,
} from "../slices/mapSlice";

export const fetchAirports = () => (dispatch: Dispatch) => {
  dispatch(fetchAirportsRequest());
  axios
    .get("/map/airport/")
    .then((response) => {
      dispatch(fetchAirportsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAirportsFailure(error.message));
    });
};
