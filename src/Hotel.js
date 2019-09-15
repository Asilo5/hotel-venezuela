import Customer from './Customer';
import domUpdates from './domUpdates';

class Hotel {
  constructor(data) {
    this.users = data.users;
    this.rooms = data.rooms;
    this.bookings = data.bookings;
    this.roomServices = data.roomServices;
  }

  bookingsAndServicesForDay(date, hotelData) {
    return this[hotelData].filter((booking) => booking.date === date);
  }

  searchGuestInData(name, hotelData) {
    return this[hotelData].find((guest) => guest.name === name);
  }

  findExistingGuest(name) {
    if (this.searchGuestInData(name, 'users')) {
      console.log('USER FOUND');
      let customer = new Customer(name, this.searchGuestInData(name, 'users').id)
    } else {
      console.log('USER NOT FOUND')
      domUpdates.userNotFound();
    }
  }

  addGuest(guestName) {
    let newGuest = {
      id: this.users.length + 1,
      name: guestName
    }

    console.log(newGuest)
  }

  roomsAvailableToday(date) {
   
  }

  revenueToday(date) {

  }

  roomsPercentOccupiedToday(date) {

  }

  popularBookingDate() {

  }

  mostRoomsAvailableDay() {

  }

  filterRoomsByType(type) {

  }

}

export default Hotel;