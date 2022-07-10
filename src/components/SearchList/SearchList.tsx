import "./SearchList.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import dayjs from "dayjs";
import { Trip } from "../../types/Fares";
import RYRLogo from "../../data/airlines/ryr.svg";
import EZZLogo from "../../data/airlines/ezz.svg";
import WZZLogo from "../../data/airlines/wzz.svg";

export type SearchListProps = {
  trips: Trip[];
};

const airlinesLogoMap = new Map<string, string>([
  ["RYR", RYRLogo],
  ["EZZ", EZZLogo],
  ["WZZ", WZZLogo],
]);

function SearchList({ trips }: SearchListProps) {
  const openBookingLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="container-fluid m-0 p-0 mt-4">
      <div className="row p-0 m-0">
        <div className="col-12 m-0 p-0">
          <div className="d-block d-md-none p-4">
            {trips.map((trip) => (
              <div className="card shadow border-0 mt-3" key={trip.bookingUrl}>
                <div className="card-body">
                  <div className="small fw-bold">Airline</div>
                  <img
                    src={airlinesLogoMap.get(trip.airline.icao)}
                    alt={trip.airline.icao}
                    className="img-fluid airline-logo"
                  />

                  <div className="small mt-2 fw-bold">Origin</div>
                  <div>{trip.origin.country}</div>
                  <div>
                    {trip.origin.city} [{trip.origin.airport}]
                  </div>
                  <div className="small mt-2 fw-bold">Destination</div>
                  <div>{trip.destination.country}</div>
                  <div>
                    {trip.destination.city} [{trip.destination.airport}]
                  </div>
                  <div className="small mt-2 fw-bold">Date</div>
                  <div className="small">
                    🛫 {dayjs(trip.outbound.date).format("YYYY-MM-DD HH:mm")}
                  </div>
                  <div className="small">
                    🛬 {dayjs(trip.inbound.date).format("YYYY-MM-DD HH:mm")}
                  </div>
                  <div className="small mt-2 fw-bold">Price</div>
                  <div className="small">
                    {trip.price.value} {trip.price.currency}
                  </div>
                  <div
                    className="btn search-list-btn mt-2 form-control"
                    onClick={() => openBookingLink(trip.bookingUrl)}
                  >
                    Book flight 🛍
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ListGroup className="overflow-auto d-none d-md-block">
            {trips.map((trip) => (
              <ListGroupItem className="border-0" key={trip.bookingUrl}>
                <div className="container">
                  <div className="row">
                    <div className="col-1">
                      <img
                        src={airlinesLogoMap.get(trip.airline.icao)}
                        alt={trip.airline.icao}
                        className="img-fluid airline-logo"
                      />
                    </div>
                    <div className="col-2">
                      <div className="small">{trip.origin.country}</div>
                      <div>
                        {trip.origin.city} [{trip.origin.airport}]
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="small">{trip.destination.country}</div>
                      <div>
                        {trip.destination.city} [{trip.destination.airport}]
                      </div>
                    </div>
                    <div className="col-3 d-flex align-items-center flex-column">
                      <div>
                        🛫{" "}
                        {dayjs(trip.outbound.date).format("YYYY-MM-DD HH:mm")}
                      </div>
                      <div>
                        🛬 {dayjs(trip.inbound.date).format("YYYY-MM-DD HH:mm")}
                      </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                      <div>
                        {trip.price.value} {trip.price.currency}
                      </div>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <div
                        className="btn search-list-btn"
                        onClick={() => openBookingLink(trip.bookingUrl)}
                      >
                        Book flight 🛍
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default SearchList;
