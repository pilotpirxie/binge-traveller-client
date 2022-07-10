import axios, { AxiosResponse } from "axios";
import { put } from "redux-saga/effects";
import { Trip } from "../types/Fares";
import {
  addResults,
  SearchAPIParams,
  SearchStatus,
  setProgress,
  setStatus,
} from "../reducers/searchResults";

export const GetTripsActionType = "data/getTrips";

type GetTripsPayloadAction = {
  queue: SearchAPIParams[];
};

type GetTripsSagaAction = {
  type: typeof GetTripsActionType;
  payload: GetTripsPayloadAction;
};

export const getTrips = (
  payload: GetTripsPayloadAction
): GetTripsSagaAction => ({
  type: "data/getTrips",
  payload: {
    queue: payload.queue,
  },
});

export function* getTripsSaga(action: GetTripsSagaAction) {
  try {
    yield put(setStatus({ status: SearchStatus.PENDING }));

    for (let i = 0; i < action.payload.queue.length; i++) {
      yield put(
        setProgress({
          progress: Math.round((i / action.payload.queue.length) * 100),
        })
      );

      const results: AxiosResponse<Trip[]> = yield axios.post<Trip[]>(
        process.env.NODE_ENV === "production"
          ? "/search"
          : "http://localhost:3001/search",
        action.payload.queue[i]
      );
      yield put(addResults({ results: results.data }));
    }

    yield put(setStatus({ status: SearchStatus.SUCCESS }));
  } catch (error) {
    yield put(setStatus({ status: SearchStatus.FAILURE }));
  }
}
