import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trip } from "../types/Fares";

export enum SearchStatus {
  INITIAL,
  PENDING,
  SUCCESS,
  FAILURE,
}

export type SearchAPIParams = {
  originAirport: string;
  outbound: Date;
  inbound: Date;
  numberOfAdults: number;
  airline: string;
};

const initialState: {
  results: Trip[];
  progress: number;
  status: SearchStatus;
} = {
  progress: 0,
  results: [],
  status: SearchStatus.INITIAL,
};

type SetProgressPayloadAction = { progress: number };
type AddResultsPayloadAction = { results: Trip[] };
type SetStatusPayloadAction = { status: SearchStatus };

export const searchResults = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    addResults: {
      reducer(state, action: PayloadAction<AddResultsPayloadAction>) {
        state.results.push(...action.payload.results);
      },
      prepare(payload: AddResultsPayloadAction) {
        return { payload };
      },
    },
    clearResults: {
      reducer(state) {
        state.results = [];
      },
      prepare(payload) {
        return { payload };
      },
    },
    setProgress: {
      reducer(state, action: PayloadAction<SetProgressPayloadAction>) {
        state.progress = action.payload.progress;
      },
      prepare(payload: SetProgressPayloadAction) {
        return { payload };
      },
    },
    setStatus: {
      reducer(state, action: PayloadAction<SetStatusPayloadAction>) {
        state.status = action.payload.status;
      },
      prepare(payload: SetStatusPayloadAction) {
        return { payload };
      },
    },
  },
});

export const { setProgress, clearResults, setStatus, addResults } =
  searchResults.actions;

export default searchResults.reducer;
