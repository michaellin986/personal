import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    isLoading: false,
    error: "",
    airports: [],
    flights: [],
    routes: [],
  },
  reducers: {
    fetchAirportsRequest: (state) => {
      state.isLoading = true;
    },
    fetchAirportsSuccess: (state, action) => {
      state.isLoading = false;
      state.airports = action.payload;
    },
    fetchAirportsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    fetchFlightsRequest: (state) => {
      state.isLoading = true;
    },
    fetchFlightsSuccess: (state, action) => {
      state.isLoading = false;
      state.flights = action.payload;
    },
    fetchFlightsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    fetchRoutesRequest: (state) => {
      state.isLoading = true;
    },
    fetchRoutesSuccess: (state, action) => {
      state.isLoading = false;
      state.routes = action.payload;
    },
    fetchRoutesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  fetchAirportsRequest,
  fetchAirportsSuccess,
  fetchAirportsFailure,
  fetchFlightsRequest,
  fetchFlightsSuccess,
  fetchFlightsFailure,
  fetchRoutesRequest,
  fetchRoutesSuccess,
  fetchRoutesFailure,
} = mapSlice.actions;

export const mapReducer = mapSlice.reducer;
