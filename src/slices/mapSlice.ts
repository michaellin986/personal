import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    isLoading: false,
    error: "",
    airports: [],
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
  },
});

export const {
  fetchAirportsRequest,
  fetchAirportsSuccess,
  fetchAirportsFailure,
} = mapSlice.actions;

export const mapReducer = mapSlice.reducer;
