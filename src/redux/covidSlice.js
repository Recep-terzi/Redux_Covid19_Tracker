import { createSlice } from "@reduxjs/toolkit";

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    countryData: [],
    selectCountry: null,
    status: "idle",
    countryOneData: "",
  },
  reducers: {
    setCountryData: (state, action) => {
      state.countryData = action.payload;
    },
    setSelectCountry: (state, action) => {
      state.selectCountry = action.payload;
    },
    setCountryOneData: (state, action) => {
      state.countryOneData = action.payload;
    },
  },
  extraReducers: {},
});

export const { setCountryData, setSelectCountry, setCountryOneData } =
  covidSlice.actions;
export default covidSlice.reducer;
