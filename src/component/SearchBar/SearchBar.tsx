import React from "react";
import "./SearchBar.css";
import { Badge, Button, Input } from "reactstrap";
import Logo from "../Logo/Logo";

function SearchBar() {
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
                  <div className="mb-3">Miejsce wylotu 🛫</div>
                  <Input type="select" placeholder="Wybierz">
                    <option>Wybierz</option>
                  </Input>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Destynacja 🛬</div>
                  <Input type="select" placeholder="Wybierz">
                    <option>Wybierz</option>
                  </Input>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Szukaj od 📆</div>
                  <Input type="date" placeholder="Wybierz" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Szukaj do 📆</div>
                  <Input type="date" placeholder="Wybierz" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="card search-card">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">Długość pobytu 🌴</div>
                  <Input
                    type="number"
                    placeholder="Wybierz"
                    min={1}
                    max={60}
                    step={1}
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
              Rzym [CIA]
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
              Londyn [STN]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
            >
              Marsylia [MRS]
            </Badge>
            <Badge
              color="white"
              className="fs-6 text-black me-2 search-suggestion mb-2 mb-lg-0"
            >
              Praga [PRG]
            </Badge>
          </div>
          <div className="col-12 col-md-3">
            <Button className="search-button w-100 p-3">Szukaj 🔍</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
