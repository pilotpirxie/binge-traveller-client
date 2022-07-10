import React, { useState } from "react";
import "./App.css";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import axios from "axios";
import { ProgressBar } from "primereact/progressbar";
import dayjs from "dayjs";
import SearchBar, { SearchParams } from "../SearchBar/SearchBar";
import SearchList from "../SearchList/SearchList";
import { Trip } from "../../types/Fares";

export enum SearchState {
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

// eslint-disable-next-line no-promise-executor-return
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [searchState, setSearchState] = useState<SearchState>(
    SearchState.INITIAL
  );
  const [progress, setProgress] = useState(0);

  const handleSearch = async (searchParams: SearchParams) => {
    setSearchState(SearchState.PENDING);
    setTrips([]);

    const datesToCheck =
      dayjs(searchParams.dateTo).diff(searchParams.dateFrom, "day") -
      searchParams.days +
      1;

    const searchQueue: SearchAPIParams[] = [];
    searchParams.originAirports.forEach((originAirport) => {
      searchParams.airlines.forEach((airline) => {
        for (let i = 0; i < datesToCheck; i++) {
          searchQueue.push({
            airline,
            originAirport,
            numberOfAdults: searchParams.numberOfAdults,
            outbound: dayjs(searchParams.dateFrom).add(i, "day").toDate(),
            inbound: dayjs(searchParams.dateFrom)
              .add(i + searchParams.days, "day")
              .toDate(),
          });
        }
      });
    });

    for (let i = 0; i < searchQueue.length; i++) {
      setProgress(Math.round(((i + 1) / searchQueue.length) * 100));
      // eslint-disable-next-line no-await-in-loop
      await sleep(100);
      // eslint-disable-next-line no-await-in-loop
      await axios
        .post<Trip[]>(
          process.env.NODE_ENV === "production"
            ? "/search"
            : "http://localhost:3001/search",
          searchQueue[i]
        )
        .then((res) => {
          setTrips((oldTrips) => [...oldTrips, ...res.data]);
          setSearchState(SearchState.SUCCESS);
        })
        .catch(() => {
          setSearchState(SearchState.FAILURE);
        });
    }
  };

  return (
    <div className="">
      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {searchState === SearchState.PENDING && (
                <div>
                  <ProgressBar value={progress} className="mt-4" />
                  <div className="d-flex justify-content-end mt-1">
                    <div className="small opacity-50 cursor-pointer">
                      Cancel
                    </div>
                  </div>
                </div>
              )}
              {searchState === SearchState.INITIAL && (
                <h4 className="text-center mt-3">
                  Select criteria and click search 🔍
                </h4>
              )}
              {searchState === SearchState.PENDING && (
                <h4 className="text-center mt-3">
                  ⌛ Loading, sit back and relax. It may take a moment...
                </h4>
              )}
              {searchState === SearchState.FAILURE && (
                <h4 className="text-center mt-3">🤷‍♀️ Something went wrong...</h4>
              )}
              {searchState === SearchState.SUCCESS && trips.length === 0 && (
                <h4 className="text-center mt-3">
                  Nothing found, change criteria and try again 🍸
                </h4>
              )}
            </div>
          </div>
        </div>
        <SearchList trips={trips} />
      </div>
    </div>
  );
}

export default App;
