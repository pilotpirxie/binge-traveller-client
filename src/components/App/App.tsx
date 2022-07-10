import React from "react";
import "./App.css";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ProgressBar } from "primereact/progressbar";
import dayjs from "dayjs";
import SearchBar, { SearchParams } from "../SearchBar/SearchBar";
import SearchList from "../SearchList/SearchList";
import { useAppDispatch, useAppSelector } from "../../utils/store";
import { SearchAPIParams, SearchStatus } from "../../reducers/searchResults";
import { getTrips } from "../../sagas/data";

function App() {
  const dispatch = useAppDispatch();

  const handleSearch = async (searchParams: SearchParams) => {
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

    dispatch(getTrips({ queue: searchQueue }));
  };

  const status = useAppSelector((state) => state.searchResults.status);
  const results = useAppSelector((state) => state.searchResults.results);
  const progress = useAppSelector((state) => state.searchResults.progress);

  const sortedResults = [...results].sort(
    (a, b) => a.price.value - b.price.value
  );

  return (
    <div className="">
      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {status === SearchStatus.PENDING && (
                <div>
                  <ProgressBar value={progress} className="mt-4" />
                  <div className="d-flex justify-content-end mt-1">
                    <div className="small opacity-50 cursor-pointer">
                      Cancel
                    </div>
                  </div>
                </div>
              )}
              {status === SearchStatus.INITIAL && (
                <h4 className="text-center mt-3">
                  Select criteria and click search 🔍
                </h4>
              )}
              {status === SearchStatus.PENDING && (
                <h4 className="text-center mt-3">
                  ⌛ Loading, sit back and relax. It may take a moment...
                </h4>
              )}
              {status === SearchStatus.FAILURE && (
                <h4 className="text-center mt-3">🤷‍♀️ Something went wrong...</h4>
              )}
              {status === SearchStatus.SUCCESS && results.length === 0 && (
                <h4 className="text-center mt-3">
                  Nothing found, change criteria and try again 🍸
                </h4>
              )}
            </div>
          </div>
        </div>
        <SearchList trips={sortedResults} />
      </div>
    </div>
  );
}

export default App;
