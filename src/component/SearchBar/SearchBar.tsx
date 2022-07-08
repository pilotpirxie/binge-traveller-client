import React, { useState } from "react";
import "./SearchBar.css";
import { Badge, Button } from "reactstrap";
import dayjs from "dayjs";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import Logo from "../Logo/Logo";
import airports from "../../data/airports.json";
import flags from "../../data/flags.json";

export type SearchParams = {
  originAirport: Array<string>;
  destinationAirport: Array<string>;
  dateFrom: Date;
  dateTo: Date;
  days: number;
};

export type SearchBarProps = {
  onSearch: (params: SearchParams) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [departure, setDeparture] = useState<Array<string>>([]);
  const [destination, setDestination] = useState<Array<string>>([]);
  const [dateFrom, setDateFrom] = useState<Date>(dayjs().toDate());
  const [dateTo, setDateTo] = useState<Date>(dayjs().add(1, "day").toDate());
  const [days, setDays] = useState(1);

  const handleSearchClick = () => {
    onSearch({
      days,
      dateFrom,
      dateTo,
      originAirport: departure,
      destinationAirport: destination,
    });
  };

  const airportsItems = airports.map((airport) => ({
    label: `${
      flags.find((flag) => flag.name === airport.country.name)?.emoji || ""
    } ${airport.name} [${airport.code}] ${airport.country.name}`,
    value: airport.code,
  }));

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
                  <MultiSelect
                    value={departure}
                    options={airportsItems}
                    onChange={(e) => {
                      setDeparture(e.value);
                    }}
                    placeholder="Select"
                    display="chip"
                    filter
                    selectionLimit={3}
                    showSelectAll={false}
                    className="w-100 border-0"
                    filterPlaceholder="Search for departure airport"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Destination 🛬</div>
                  <MultiSelect
                    value={destination}
                    options={airportsItems}
                    onChange={(e) => {
                      setDestination(e.value);
                    }}
                    placeholder="Optional"
                    display="chip"
                    filter
                    selectionLimit={3}
                    showSelectAll={false}
                    className="w-100 border-0"
                    filterPlaceholder="Search for destination airport"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">From date 📆</div>
                  <Calendar
                    placeholder="Select"
                    value={dateFrom}
                    minDate={dayjs().toDate()}
                    maxDate={dayjs().add(1, "year").toDate()}
                    required
                    selectionMode="single"
                    dateFormat="yy-mm-dd"
                    onChange={(e) => setDateFrom(e.value as Date)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">To date 📆</div>
                  <Calendar
                    placeholder="Select"
                    value={dateTo}
                    minDate={dayjs().toDate()}
                    maxDate={dayjs().add(1, "year").toDate()}
                    required
                    selectionMode="single"
                    dateFormat="yy-mm-dd"
                    onChange={(e) => setDateTo(e.value as Date)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Days of stay 🌴</div>
                  <InputNumber
                    placeholder="Select"
                    min={0}
                    max={365}
                    step={1}
                    value={days}
                    required
                    onChange={(e) => setDays(e.value || 0)}
                    className="w-100"
                    inputClassName="w-100"
                    showButtons
                    allowEmpty={false}
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
              onClick={() => setDestination(["CIA"])}
            >
              🇮🇹 Rome [CIA]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination(["BCN"])}
            >
              🇪🇸 Barcelona [BCN]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination(["STN"])}
            >
              🇬🇧 London [STN]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination(["MRS"])}
            >
              🇫🇷 Marseille [MRS]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
              onClick={() => setDestination(["PRG"])}
            >
              🇨🇿 Prague [PRG]
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
