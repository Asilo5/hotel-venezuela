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
      $('.bookings-summary').append(`<tr>
    <td> Date: ${room.date} in Room: ${room.roomNumber} </td>
    <td><button type="button" data-id="${room.date}">Delete</button></td>
    </tr>)`)
    })
  },

  appendHotelBookings(bookings, date) {
    $('.show-rooms-container').append(`
      <h3> ${date} </h3>
    <tr>
       <th>Room #</th>
       <th>Room Type</th>
       <th>Bed Size</th>
       <th>Number of Beds</th>
      <th>Bidet</th>
      <th>Cost per Night</th>
     </tr>`)
    bookings.forEach((booking) => {
      $('.show-rooms-container').append(`
      <tr>
        <td>${booking.number}</td>
        <td>${booking.roomType}</td>
        <td>${booking.bedSize}</td>
        <td>${booking.numBeds}</td>
        <td>${booking.bidet ? 'Yes' : 'No'}</td>
        <td>${'$' + booking.costPerNight}</td>
        <td><button class='book-button' type="button" data-id="${booking.number}">Book</button></td>
    </tr>`)
    })
  },

  appendFoodMenu(menu) {
    $('.food-menu').append(`
       <tr>
         <th> Food </th>
         <th> Price </th>
       </tr>
    `)
    menu.forEach((theFood) => {
      $('.food-menu').append(`
        <tr>
          <td> ${theFood.food} </td>
          <td> ${theFood.cost} </td>
          <td><button class='buy-food-button'data-id="${theFood.food}">Buy</button> </td>
        </tr>
      `)
    })
  }
};

export default domUpdates;