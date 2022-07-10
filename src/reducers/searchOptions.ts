import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState: {
  days: number;
  dateFrom: Date;
  dateTo: Date;
  originAirports: string[];
  destinationAirports: string[];
  airlines: string[];
  numberOfPassengers: 1;
} = {
  days: 1,
  dateFrom: dayjs().toDate(),
  dateTo: dayjs().add(1, "day").toDate(),
  originAirports: [],
  destinationAirports: [],
  airlines: ["RYR", "WZZ", "EZZ"],
  numberOfPassengers: 1,
};

type SetDaysPayloadAction = { days: number };
type SetDatePayloadAction = { date: Date };
type SetAirportsPayloadAction = { airports: string[] };

export const searchOptions = createSlice({
  name: "searchOptions",
  initialState,
  reducers: {
    setDays: {
      reducer(state, action: PayloadAction<SetDaysPayloadAction>) {
        state.days = action.payload.days;
      },
      prepare(payload: SetDaysPayloadAction) {
        return { payload };
      },
    },
    setDateFrom: {
      reducer(state, action: PayloadAction<SetDatePayloadAction>) {
        state.dateFrom = action.payload.date;
      },
      prepare(payload: SetDatePayloadAction) {
        return { payload };
      },
    },
    setDateTo: {
      reducer(state, action: PayloadAction<SetDatePayloadAction>) {
        state.dateTo = action.payload.date;
      },
      prepare(payload: SetDatePayloadAction) {
        return { payload };
      },
    },
    setOriginAirports: {
      reducer(state, action: PayloadAction<SetAirportsPayloadAction>) {
        state.originAirports = action.payload.airports;
      },
      prepare(payload: SetAirportsPayloadAction) {
        return { payload };
      },
    },
    setDestinationAirports: {
      reducer(state, action: PayloadAction<SetAirportsPayloadAction>) {
        state.destinationAirports = action.payload.airports;
      },
      prepare(payload: SetAirportsPayloadAction) {
        return { payload };
      },
    },
  },
});

export const {
  setDays,
  setDestinationAirports,
  setOriginAirports,
  setDateTo,
  setDateFrom,
} = searchOptions.actions;

export default searchOptions.reducer;
