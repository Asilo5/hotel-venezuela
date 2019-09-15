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
    this.users.push(newGuest);
    return this.users[this.users.length - 1];
  }

  roomsAvailableToday(date) {
    let findRoomNum = this.bookingsAndServicesForDay(date, 'bookings')
      .map((room) => room.roomNumber);

    return findRoomNum.reduce((totalRooms, room) => {
      this.rooms.forEach((bedroom) => {
        if (bedroom.number === room) {
          totalRooms.push(bedroom);
        }
      })
      return totalRooms;
    }, [])
  }

  revenueToday(date) {
    let findBookedRooms = this.bookingsAndServicesForDay(date, 'bookings')
      .map((room) => room.roomNumber);

    let bookingsRevenue = this.rooms.reduce((totalBooked, room) => {
      findBookedRooms.forEach((bedroom) => {
        if (room.number === bedroom) {
          totalBooked += room.costPerNight
        }
      })
      return totalBooked;
    }, 0);

    let findServiceRevenue = this.roomServices.reduce((totalService, service) => {
      if (service.date === date) {
        totalService += service.totalCost;
      }
      return totalService;
    }, 0);

    return Number((bookingsRevenue + findServiceRevenue).toFixed(2));
  }

  roomsPercentOccupiedToday(date) {
    let bookedRooms = this.bookingsAndServicesForDay(date, 'bookings').length;
    let findPercentage = (bookedRooms / this.bookings.length) * 100;
    return Number(findPercentage.toFixed(1));
  }

  popularBookingDate() {

  }

  mostRoomsAvailableDay() {

  }

  filterRoomsByType(type) {

  }

}

export default Hotel;