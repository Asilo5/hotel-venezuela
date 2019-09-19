import Booking from "./Bookings";

class Customer {
  constructor(id, name, hotel) {
    this.id = id;
    this.name = name;
    this.hotel = hotel;
    this.bookings;
  }

  // use the hotel.searchGuestInData to find user

  roomServiceBreakDown() {
    return this.hotel.roomServices.filter((service) => service.userID === this.id);
  }

  totalRoomServiceToday(date) {
    return this.roomServiceBreakDown().filter((service) => service.date === date)
      .reduce((serviceTotal, service) => {
        return serviceTotal += service.totalCost
      }, 0);
  }

  overallRoomServiceTotal() {
    return this.roomServiceBreakDown().reduce((totalService, service) => {
      return totalService += service.totalCost;
    }, 0);
  }

  bookingsFromGuest() {
    this.bookings = new Booking(this.id, this.name, this.hotel);
  }
}

export default Customer;