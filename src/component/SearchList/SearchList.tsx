import "./SearchList.css";
import { ListGroup, ListGroupItem } from "reactstrap";

function SearchList() {
  return (
    <div className="container-fluid m-0 p-0 mt-4">
      <div className="row p-0 m-0">
        <div className="col-12 m-0 p-0">
          <div className="d-block d-md-none p-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <div className="small fw-bold">Dokąd?</div>
                <div>Hiszpania</div>
                <div>Barcelona [BCN]</div>

                <div className="small mt-2 fw-bold">Kiedy?</div>
                <div className="small">🛫 03.07.2022</div>
                <div className="small">🛬 04.07.2022</div>

                <div className="small mt-2 fw-bold">Na ile?</div>
                <div className="small">2 dni</div>

                <div className="small mt-2 fw-bold">Cena</div>
                <div className="small">44 PLN</div>

                <div className="btn search-list-btn mt-2 form-control">
                  Book flight 🛍
                </div>
              </div>
            </div>
          </div>
          <ListGroup className="overflow-auto d-none d-md-block">
            <ListGroupItem className="border-0">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex align-items-center justify-content-between">
                    <div>
                      <div className="small">Hiszpania</div>
                      <div>Barcelona [BCN]</div>
                    </div>
                    <div>
                      <div>🛫 03.07.2022</div>
                      <div>🛬 04.07.2022</div>
                    </div>
                    <div>
                      <div>2 dni</div>
                    </div>
                    <div>
                      <div>44 PLN</div>
                    </div>
                    <div>
                      <div className="btn search-list-btn">Book flight 🛍</div>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default SearchList;
