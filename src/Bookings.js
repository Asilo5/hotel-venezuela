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

  unbookRoom(date, roomNumber) {

  }

  purchaseRoomService(date) {

  }

  upgradeRoom() {

  }

  summaryOfGuestBookings() {

  }

}

export default Booking;