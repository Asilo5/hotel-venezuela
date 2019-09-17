import $ from 'jquery';

let domUpdates = {

  findCurrentDate() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    return `${year}/${month}/${day}`;
  },

  appendListOfGuests(hotelData) {
    hotelData.forEach((guest) => {
      $('.search-for-guest-input').append(`<option value="${guest.name}">${guest.name}</option>`)
    })
  },

  appendServicesForToday(services) {
    services.forEach((service) => {
      $('.all-orders-today').append(`
      <p class='appended-orders-today'> Date: ${service.date} Food: ${service.food} Cost: $ ${service.totalCost} </p>`)
    })
  },

  appendOrdersBreakDown(orders) {
    orders.forEach((order) => {
      $('.room-service-breakdown').append(`
        <p class='appended-orders-breakdown'> Date: ${order.date} Food: ${order.food} Cost: $ ${order.totalCost} </p>`)
    })
  },
  
  appendGuestBookings(booking) {
    booking.forEach((room) => {
      $('.bookings-summary').append(`
      <p class='appended-bookings'> Date: ${room.date} Room: ${room.roomNumber} </p>`)
    })
  }
};

export default domUpdates;