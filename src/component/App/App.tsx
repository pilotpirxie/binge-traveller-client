import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SearchBar, { SearchParams } from "../SearchBar/SearchBar";
import SearchList from "../SearchList/SearchList";
import { Trip } from "../../types/Fares";

function App() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleSearch = async (searchParams: SearchParams) => {
    await axios
      .post<Trip[]>("http://localhost:3001/search", searchParams)
      .then((res) => {
        setTrips(res.data);
        console.log(trips);
      });
  };

  return (
    <div className="">
      <div>
        <SearchBar onSearch={handleSearch} />
        <SearchList trips={trips} />
      </div>
    </div>
  );
}

export default App;
