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
  days: 0,
  dateFrom: dayjs().toDate(),
  dateTo: dayjs().add(1, "day").toDate(),
  originAirports: [],
  destinationAirports: [],
  airlines: ["RYR"],
  numberOfPassengers: 1,
};

type SetDaysPayloadAction = { days: number };

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
  },
});

export const { setDays } = searchOptions.actions;

export default searchOptions.reducer;
