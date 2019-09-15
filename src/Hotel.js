import Customer from './Customer';
import domUpdates from './domUpdates';

class Hotel {
  constructor(data) {
    this.users = data.users;
    this.rooms = data.rooms;
    this.bookings = data.bookings;
    this.roomServices = data.roomServices;
    this.customer;
  }

  bookingsAndServicesForDay(date, hotelData) {
    return this[hotelData].filter((booking) => booking.date === date);
  }

  searchGuestInData(name, hotelData) {
    return this[hotelData].find((guest) => guest.name === name);
  }

  findExistingGuest(name, hotel) {
    if (this.searchGuestInData(name, 'users')) {
      console.log('USER FOUND');
      this.customer = new Customer(this.searchGuestInData(name, 'users').id, name, hotel)
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

  popularAndUnpopularRooms() {
    return this.bookings.reduce((allDates, booking) => {
      if (!allDates[booking.date]) {
        allDates[booking.date] = 1;
      } else {
        allDates[booking.date]++;
      }
      return allDates;
    }, {});
  }

  popularBookingDateAndRoomsAvailable(value) {
    let popularDate = Math[value](...Object.values(this.popularAndUnpopularRooms()));
    return Object.keys(this.popularAndUnpopularRooms()).find((bookDate) => this.popularAndUnpopularRooms()[bookDate] === popularDate);
  }

  filterRoomsByType(type) {
    return this.rooms.filter((room) => room.roomType === type);
  }

}

export default Hotel;