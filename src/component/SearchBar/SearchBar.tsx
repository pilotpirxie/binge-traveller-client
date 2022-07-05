import React, { useState } from "react";
import "./SearchBar.css";
import { Badge, Button, Input } from "reactstrap";
import dayjs from "dayjs";
import Logo from "../Logo/Logo";

export type SearchParams = {
  departureAirport: string;
  dateTo: Date;
  dateFrom: Date;
  days: number;
};

export type SearchBarProps = {
  onSearch: (params: SearchParams) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [departure, setDeparture] = useState("");
  // const [destination, setDestination] = useState('');
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
      departureAirport: departure,
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
                    <option value="WMI">Warsaw Modlin WMI</option>
                    <option value="KRK">Cracow KRK</option>
                  </Input>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Destination 🛬</div>
                  <Input type="select" placeholder="Select">
                    <option>Select</option>
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
            >
              Rome [CIA]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
            >
              Barcelona [BCN]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
            >
              London [STN]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
            >
              Marseille [MRS]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
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
