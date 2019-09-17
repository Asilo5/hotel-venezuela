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
      Date: ${service.date} Food: ${service.food} Cost: $ ${service.totalCost}`)
    })
  },

  appendOrdersBreakDown(orders) {
    orders.forEach((order) => {
      $('.room-service-breakdown').append(`
        <p> Date: ${order.date} Food: ${order.food} Cost: $ ${order.totalCost} </p>`)
    })
  },


};

export default domUpdates;