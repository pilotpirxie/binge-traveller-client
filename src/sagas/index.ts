import { takeEvery } from "redux-saga/effects";
import { GetTripsActionType, getTripsSaga } from "./data";

export default function* rootSaga() {
  yield takeEvery(GetTripsActionType, getTripsSaga);
}
