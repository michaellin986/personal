import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    isLoadingAirports: false,
    isLoadingFlights: false,
    isLoadingRoutes: false,
    error: "",
    airports: [],
    flights: [],
    routes: [],
  },
  reducers: {
    fetchAirportsRequest: (state) => {
      state.isLoadingAirports = true;
    },
    fetchAirportsSuccess: (state, action) => {
      state.isLoadingAirports = false;
      state.airports = action.payload;
    },
    fetchAirportsFailure: (state, action) => {
      state.isLoadingAirports = false;
      state.error = action.payload.error;
    },
    fetchFlightsRequest: (state) => {
      state.isLoadingFlights = true;
    },
    fetchFlightsSuccess: (state, action) => {
      state.isLoadingFlights = false;
      state.flights = action.payload;
    },
    fetchFlightsFailure: (state, action) => {
      state.isLoadingFlights = false;
      state.error = action.payload.error;
    },
    fetchRoutesRequest: (state) => {
      state.isLoadingRoutes = true;
    },
    fetchRoutesSuccess: (state, action) => {
      state.isLoadingRoutes = false;
      state.routes = action.payload;
    },
    fetchRoutesFailure: (state, action) => {
      state.isLoadingRoutes = false;
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
