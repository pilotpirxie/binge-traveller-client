import React from "react";
import "./App.css";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ProgressBar } from "primereact/progressbar";
import SearchBar from "../SearchBar/SearchBar";
import SearchList from "../SearchList/SearchList";
import { useAppSelector } from "../../utils/store";
import { SearchStatus } from "../../reducers/searchResults";

function App() {
  // const handleSearch = async (searchParams: SearchParams) => {
  //   const datesToCheck =
  //     dayjs(searchParams.dateTo).diff(searchParams.dateFrom, "day") -
  //     searchParams.days +
  //     1;
  //
  //   const searchQueue: SearchAPIParams[] = [];
  //   searchParams.originAirports.forEach((originAirport) => {
  //     searchParams.airlines.forEach((airline) => {
  //       for (let i = 0; i < datesToCheck; i++) {
  //         searchQueue.push({
  //           airline,
  //           originAirport,
  //           numberOfAdults: searchParams.numberOfAdults,
  //           outbound: dayjs(searchParams.dateFrom).add(i, "day").toDate(),
  //           inbound: dayjs(searchParams.dateFrom)
  //             .add(i + searchParams.days, "day")
  //             .toDate(),
  //         });
  //       }
  //     });
  //   });
  //
  //   for (let i = 0; i < searchQueue.length; i++) {
  //     setProgress(Math.round(((i + 1) / searchQueue.length) * 100));
  //     // eslint-disable-next-line no-await-in-loop
  //     await sleep(100);
  //     // eslint-disable-next-line no-await-in-loop
  //     await axios
  //       .post<Trip[]>(
  //         process.env.NODE_ENV === "production"
  //           ? "/search"
  //           : "http://localhost:3001/search",
  //         searchQueue[i]
  //       )
  //       .then((res) => {
  //         setTrips((oldTrips) => [...oldTrips, ...res.data]);
  //         setSearchState(SearchState.SUCCESS);
  //       })
  //       .catch(() => {
  //         setSearchState(SearchState.FAILURE);
  //       });
  //   }
  // };

  const status = useAppSelector((state) => state.searchResults.status);
  const results = useAppSelector((state) => state.searchResults.results);

  return (
    <div className="">
      <div>
        <SearchBar onSearch={() => {}} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {status === SearchStatus.PENDING && (
                <div>
                  <ProgressBar value={1} className="mt-4" />
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
        <SearchList trips={results} />
      </div>
    </div>
  );
}

export default App;
