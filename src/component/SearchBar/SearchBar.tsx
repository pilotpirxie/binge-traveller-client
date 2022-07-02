import React from "react";
import "./SearchBar.css";
import { Badge, Button, Input } from "reactstrap";
import Logo from "../Logo/Logo";

function SearchBar() {
  return (
    <div className="search-bar py-5">
      <div className="d-flex justify-content-center mb-5">
        <Logo />
      </div>
      <div className="row d-flex justify-content-center">
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
      <div className="row d-flex align-items-center justify-content-center mt-3">
        <div className="col-12 col-md-8">
          <Badge color="white" className="fs-6 text-black me-2">
            Rzym [CIA]
          </Badge>
          <Badge color="white" className="fs-6 text-black me-2">
            Barcelona [BCN]
          </Badge>
          <Badge color="white" className="fs-6 text-black me-2">
            Londyn [STN]
          </Badge>
          <Badge color="white" className="fs-6 text-black me-2">
            Marsylia [MRS]
          </Badge>
          <Badge color="white" className="fs-6 text-black me-2">
            Praga [PRG]
          </Badge>
        </div>
        <div className="col-12 col-md-2">
          <Button className="search-button w-100 p-3">Szukaj 🔍</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
