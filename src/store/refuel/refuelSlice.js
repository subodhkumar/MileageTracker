import { createSlice } from "@reduxjs/toolkit";
import { getAvgMileage, getLastEntryMessage, getLastFuelPrice, getLastMileage } from "../utils";
export const refuelSlice = createSlice({
  name: "refuel",
  initialState: {
    data: [],
  },
  reducers: {
    addRefuel: (state, action) => {
      action.payload && state.data.unshift(action.payload);
    },
    clearRefuel: (state) => {
      state.data = [];
    },
    loadRefuel: (state) => {
      state;
    },
    addRefuelBegin: (state) => {},
    addRefuelEnd: (state, action) => {},
    fetchRefuelBegin: () => {},
    fetchRefuelSuccess: () => {},
    fetchRefuelFailure: () => {},
  },
});

export const { addRefuel, clearRefuel, loadRefuel } = refuelSlice.actions;
export default refuelSlice.reducer;

export const getGasSummary = ({ refuel: { data } }) => {
  return {
    avgFuelConsumption: getAvgMileage(data) || 0,
    lastFuelConsumption: getLastMileage(data) || 0,
    lastFuelPrice: getLastFuelPrice(data) || 0,
    lastEntryMessage: getLastEntryMessage(data) || "",
  };
};


