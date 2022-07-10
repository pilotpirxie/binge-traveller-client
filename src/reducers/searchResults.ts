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
  queue: SearchAPIParams[];
  queueIndex: number;
  status: SearchStatus;
} = {
  queue: [],
  queueIndex: 0,
  results: [],
  status: SearchStatus.INITIAL,
};

type SetQueuePayloadAction = { queue: SearchAPIParams[] };
type SetQueueIndexPayloadAction = { index: number };
type AddResultsPayloadAction = { results: Trip[] };
type SetStatusPayloadAction = { status: SearchStatus };

export const searchResults = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    setQueue: {
      reducer(state, action: PayloadAction<SetQueuePayloadAction>) {
        state.queue = action.payload.queue;
      },
      prepare(payload: SetQueuePayloadAction) {
        return { payload };
      },
    },
    addResults: {
      reducer(state, action: PayloadAction<AddResultsPayloadAction>) {
        state.results.push(...action.payload.results);
      },
      prepare(payload: AddResultsPayloadAction) {
        return { payload };
      },
    },
    setQueueIndex: {
      reducer(state, action: PayloadAction<SetQueueIndexPayloadAction>) {
        state.queueIndex = action.payload.index;
      },
      prepare(payload: SetQueueIndexPayloadAction) {
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

export const { setQueue, setQueueIndex, setStatus, addResults } =
  searchResults.actions;

export default searchResults.reducer;
