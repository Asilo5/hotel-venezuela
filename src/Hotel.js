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

  bookingsForDay(date) {
    return this.bookings.filter((booking) => booking.date === date);
  }

  servicesForDay(date) {
    return this.roomServices.filter((services) => services.date === date);
  }

  searchGuestInData(name) {
    return this.users.find((guest) => guest.name === name);
  }

  findExistingGuest(name, hotel) {
    if (this.searchGuestInData(name)) {
      this.customer = new Customer(this.searchGuestInData(name).id, name, hotel);
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
    let findRoomNum = this.bookingsForDay(date)
      .map((room) => room.roomNumber);

    return findRoomNum.reduce((totalRooms, room) => {
      this.rooms.forEach((bedroom) => {
        if (bedroom.number === room) {
          totalRooms.push(bedroom);
        }
      })
      return totalRooms;
    }, []);
  }

  revenueToday(date) {
    let findBookedRooms = this.bookingsForDay(date)
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
    let bookedRooms = this.bookingsForDay(date).length;
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

  foodMenu() {
    console.log('hello')
    let allRoomService = this.roomServices.reduce((totalMenu, service) => {
      if (!totalMenu[service.food]) {
        totalMenu[service.food] = service.totalCost
      }
      return totalMenu; 
    }, {});

    return Object.keys(allRoomService).map((service) => {
      return {
        food: service,
        cost: allRoomService[service]
      }
    })
  }

}

export default Hotel;