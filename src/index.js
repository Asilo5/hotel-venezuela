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
.catch(error => console.log(`Error in promises ${error}`));

let hotel;
let today = domUpdates.findCurrentDate();

$('.tab-container .tabs li').on('click', function(e) {
  e.preventDefault();
  let panelSelected = e.target.getAttribute('data-id');
    
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
  $('.rooms-available-today').html(hotel.roomsAvailableToday(today));
  searchCustomer(hotel);
}, 500);

function searchCustomer(hotel) {
  console.log(hotel.findExistingGuest('Winnifred Kris', hotel))
  console.log(hotel.customer.bookings.id)
}

  
  
  
