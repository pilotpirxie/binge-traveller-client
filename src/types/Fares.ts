export interface Trip {
  destination: {
    country: string;
    airport: string;
    city: string;
  };
  origin: {
    country: string;
    airport: string;
    city: string;
  };
  outbound: {
    date: Date;
    flightNumber: string;
  };
  inbound: {
    date: Date;
    flightNumber: string;
  };
  price: {
    value: number;
    currency: string;
  };
  tripDurationDays: number;
}
