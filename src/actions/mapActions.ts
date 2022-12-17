import { Dispatch } from "redux";
import axios from "axios";
import {
  fetchAirportsRequest,
  fetchAirportsSuccess,
  fetchAirportsFailure,
  fetchFlightsRequest,
  fetchFlightsSuccess,
  fetchFlightsFailure,
  fetchRoutesRequest,
  fetchRoutesSuccess,
  fetchRoutesFailure,
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

export const fetchFlights = () => (dispatch: Dispatch) => {
  dispatch(fetchFlightsRequest());
  axios
    .get("/map/flight/")
    .then((response) => {
      dispatch(fetchFlightsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFlightsFailure(error.message));
    });
};

export const fetchRoutes = () => (dispatch: Dispatch) => {
  dispatch(fetchRoutesRequest());
  axios
    .get("/map/route/")
    .then((response) => {
      dispatch(fetchRoutesSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchRoutesFailure(error.message));
    });
};
