
class Booking {
  constructor(id, name, hotel) {
    this.id = id;
    this.name = name;
    this.hotel = hotel;
  }

  bookRoom(chosenDate, roomNum) {
    let bookedRoom = {
      userID: this.id,
      date: chosenDate,
      roomNumber: roomNum
    };
    this.hotel.bookings.push(bookedRoom);
    return this.hotel.bookings[this.hotel.bookings.length - 1];
  }

  unbookRoom(date, roomNum) {
    let findIndexBooking = this.hotel.bookings.findIndex((booking) => booking.date === date && booking.roomNumber === roomNum);
    return this.hotel.bookings.splice(findIndexBooking, 1);
  }

  purchaseRoomService(chosenDate, foodWanted) {
    let newService = {
      userID: this.id,
      date: chosenDate,
      food: foodWanted,
      totalCost: this.hotel.roomServices.find((service) => service.food === foodWanted).totalCost
    }
    this.hotel.roomServices.push(newService);
    return this.hotel.roomServices[this.hotel.roomServices.length - 1];

  }

  upgradeRoom(date, roomNum, upgradedRoom) {
    this.unbookRoom(date, roomNum);
    return this.bookRoom(date, upgradedRoom);
  }

  summaryOfGuestBookings() {
    return this.hotel.bookings.filter((guest) => guest.userID === this.id);
  }

}

export default Booking;