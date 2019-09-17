console.log('This is the JavaScript entry file - your code begins here.');

import $ from 'jquery';
import domUpdates from "./domUpdates";
import './css/base.scss';
import Hotel from './Hotel';
 

let users = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(function(response) {
  return response.json()
});

let roomServices = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then(function(response) {
  return response.json()
});

let bookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(function(response) {
  return response.json()
});

let rooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(function(response) {
  return response.json()
});

let allData = {'users': [], 'rooms': [], 'bookings': [], 'roomServices': []}

Promise.all([users, rooms, bookings, roomServices])
  .then(function(values) {
    allData['users'] = values[0].users;
    allData['rooms'] = values[1].rooms;
    allData['bookings'] = values[2].bookings;
    allData['roomServices'] = values[3].roomServices;
    return allData;
  })
  .catch(error => console.log(`Error ${error}`));

let hotel;
let today = domUpdates.findCurrentDate();

$('.tab-container .tabs li').on('click', function(e) {
  e.preventDefault();
  let panelSelected = e.target.getAttribute('data-id');

  // panelSelected.find('.tabs li.active').removeClass('active');
  // $(this).addClass('active');
    
  $('.tab-container .panel.active').slideUp(300, function() {
    $('.tab-container .panel.active').removeClass('active');
      
    $('#' + panelSelected).slideDown(300, function() {
      $('#' + panelSelected).addClass('active');
    });
  });
});

setTimeout( () => {
  hotel = new Hotel(allData);
  $('.revenue-today').html(hotel.revenueToday(today));
  $('.rooms-occupied-today').html(hotel.roomsPercentOccupiedToday(today));
  searchCustomer();
  appendRooms();
  domUpdates.appendServicesForToday(hotel.servicesForDay(today));
}, 500);

function searchCustomer() {
  domUpdates.appendListOfGuests(hotel.users);
}

$('.search-for-guest-button').on('click', function(e) {
  e.preventDefault();
  let chosenGuest = $('.search-for-guest-input').val();
  guestInput(chosenGuest);
  appendOrders();
})

$('.add-guest-button').on('click', function(e) {
  e.preventDefault();
  let newGuest = $('.add-guest-input').val();
  hotel.addGuest(newGuest);
  guestInput(newGuest);
  // domUpdates.guestAdded();
})

function guestInput(chosenGuest) {
  $('h1').text(chosenGuest);
  hotel.findExistingGuest(chosenGuest, hotel);
  appendOrders();
}

function appendRooms() {
  $('.most-popular-date').html(hotel.popularBookingDateAndRoomsAvailable('max'));
  $('.most-rooms-available').html(hotel.popularBookingDateAndRoomsAvailable('min'));
  // domUpdates.appendHotelBookings(hotel.roomsAvailableToday(today));
}

function appendOrders() {
  hotel.customer.bookingsFromGuest();
  $('.room-service-total').html(hotel.customer.overallRoomServiceTotal());
  $('.money-spent-on-date').html(hotel.customer.totalRoomServiceToday(today));
  domUpdates.appendOrdersBreakDown(hotel.customer.roomServiceBreakDown());
  domUpdates.appendGuestBookings(hotel.customer.bookings.summaryOfGuestBookings())
}

$('.back-to-default').on('click', function() {
  location.reload(true);
})

$('.rooms-input-button').on('click', function(e) {
  e.preventDefault();
  let chosenDate = $('.rooms-input').val();
  let formattedDate = chosenDate.replace(/-/gi, "/");
  domUpdates.appendHotelBookings(hotel.roomsAvailableToday(formattedDate));
})



  
  
  
