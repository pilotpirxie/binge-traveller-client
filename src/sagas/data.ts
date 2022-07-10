import axios from "axios";
import { Trip } from "../types/Fares";
import {
  addResults,
  SearchAPIParams,
  SearchStatus,
  setStatus,
} from "../reducers/searchResults";

export const GetTripsActionType = "data/getTrips";

type GetTripsPayloadAction = {
  queue: SearchAPIParams;
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
    yield setStatus({ status: SearchStatus.PENDING });

    const results: Trip[] = yield axios.post<Trip[]>(
      process.env.NODE_ENV === "production"
        ? "/search"
        : "http://localhost:3001/search",
      action.payload.queue
    );
    yield addResults({ results });
    yield setStatus({ status: SearchStatus.SUCCESS });
  } catch (error) {
    yield setStatus({ status: SearchStatus.FAILURE });
  }
}
