import React from "react";
import "./SearchBar.css";
import { Input } from "reactstrap";
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
    </div>
  );
}

export default SearchBar;
