import React, { useState } from "react";
import "./SearchBar.css";
import { Badge, Button, Input } from "reactstrap";
import dayjs from "dayjs";
import Logo from "../Logo/Logo";
import airports from "../../data/airports.json";

export type SearchParams = {
  originAirport: string;
  destinationAirport: string;
  dateTo: Date;
  dateFrom: Date;
  days: number;
};

export type SearchBarProps = {
  onSearch: (params: SearchParams) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dateFrom, setDateFrom] = useState(dayjs().format("YYYY-MM-DD"));
  const [dateTo, setDateTo] = useState(
    dayjs().add(2, "days").format("YYYY-MM-DD")
  );
  const [days, setDays] = useState(1);

  const handleSearchClick = () => {
    onSearch({
      days,
      dateFrom: dayjs(dateFrom).toDate(),
      dateTo: dayjs(dateTo).toDate(),
      originAirport: departure,
      destinationAirport: destination,
    });
  };

  return (
    <div className="search-bar py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center mb-5">
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Departure 🛫</div>
                  <Input
                    value={departure}
                    onChange={(e) => {
                      setDeparture(e.currentTarget.value);
                    }}
                    type="select"
                    placeholder="Select"
                  >
                    <option value="">Select</option>
                    {airports.map((airport) => (
                      <option value={airport.code}>
                        {airport.name} - {airport.country.name} [{airport.code}]
                      </option>
                    ))}
                  </Input>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Destination 🛬</div>
                  <Input
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.currentTarget.value);
                    }}
                    type="select"
                    placeholder="Select"
                  >
                    <option value="">Select</option>
                    {airports.map((airport) => (
                      <option value={airport.code}>
                        {airport.name} - {airport.country.name} [{airport.code}]
                      </option>
                    ))}
                  </Input>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">From date 📆</div>
                  <Input
                    type="date"
                    placeholder="Select"
                    value={dateFrom}
                    min={dayjs().format("YYYY-MM-DD")}
                    onChange={(e) =>
                      setDateFrom(
                        dayjs(e.currentTarget.value).format("YYYY-MM-DD")
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">To date 📆</div>
                  <Input
                    type="date"
                    placeholder="Select"
                    value={dateTo}
                    min={dayjs(dateFrom).format("YYYY-MM-DD")}
                    onChange={(e) =>
                      setDateTo(
                        dayjs(e.currentTarget.value).format("YYYY-MM-DD")
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Days of stay 🌴</div>
                  <Input
                    type="number"
                    placeholder="Wybierz"
                    min={1}
                    max={60}
                    step={1}
                    value={days}
                    onChange={(e) => setDays(+e.currentTarget.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-md-9 d-flex flex-wrap justify-content-start align-items-center justify-content-md-start">
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination("CIA")}
            >
              Rome [CIA]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination("BCN")}
            >
              Barcelona [BCN]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination("STN")}
            >
              London [STN]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination("MRS")}
            >
              Marseille [MRS]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination("PRG")}
            >
              Prague [PRG]
            </Badge>
          </div>
          <div className="col-12 col-md-3">
            <Button
              className="search-button w-100 p-3"
              onClick={handleSearchClick}
            >
              Search 🔍
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
