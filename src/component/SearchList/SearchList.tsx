import "./SearchList.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import dayjs from "dayjs";
import { Trip } from "../../types/Fares";

export type SearchListProps = {
  trips: Trip[];
};

function SearchList({ trips }: SearchListProps) {
  const getBookingLink = (trip: Trip) => {
    window.open(
      `https://www.ryanair.com/pl/pl/trip/flights/select?adults=1&dateOut=${dayjs(
        trip.outbound.date
      ).format("YYYY-MM-DD")}&dateIn=${dayjs(trip.inbound.date).format(
        "YYYY-MM-DD"
      )}&isReturn=true&originIata=${trip.origin.airport}&destinationIata=${
        trip.destination.airport
      }`
    );
  };
  return (
    <div className="container-fluid m-0 p-0 mt-4">
      <div className="row p-0 m-0">
        <div className="col-12 m-0 p-0">
          <div className="d-block d-md-none p-4">
            {trips.map((trip) => (
              <div className="card shadow border-0 mt-3">
                <div className="card-body">
                  <div className="small fw-bold">Dokąd?</div>
                  <div>{trip.destination.country}</div>
                  <div>
                    {trip.destination.city} [{trip.destination.airport}]
                  </div>

                  <div className="small mt-2 fw-bold">Kiedy?</div>
                  <div className="small">
                    🛫 {dayjs(trip.outbound.date).format("YYYY-MM-DD HH:mm")}
                  </div>
                  <div className="small">
                    🛬 {dayjs(trip.inbound.date).format("YYYY-MM-DD HH:mm")}
                  </div>

                  <div className="small mt-2 fw-bold">Na ile?</div>
                  <div className="small">{trip.tripDurationDays} days</div>

                  <div className="small mt-2 fw-bold">Cena</div>
                  <div className="small">
                    {trip.price.value} {trip.price.currency}
                  </div>

                  <div
                    className="btn search-list-btn mt-2 form-control"
                    onClick={() => getBookingLink(trip)}
                  >
                    Book flight 🛍
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ListGroup className="overflow-auto d-none d-md-block">
            {trips.map((trip) => (
              <ListGroupItem className="border-0">
                <div className="container">
                  <div className="row">
                    <div className="col-3">
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
                    <div className="col-3 d-flex justify-content-center">
                      <div>
                        {trip.price.value} {trip.price.currency}
                      </div>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                      <div
                        className="btn search-list-btn"
                        onClick={() => getBookingLink(trip)}
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
