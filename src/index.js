console.log('This is the JavaScript entry file - your code begins here.');

import $ from 'jquery';
import domUpdates from "./domUpdates";
import './css/base.scss';
import Hotel from './Hotel';
 
let guestsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users');
let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
let roomServiceData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices'); 
let hotel;

Promise.all([guestsData, roomsData, bookingsData, roomServiceData])
  .then(values => Promise.all(values.map((value) => value.json())))
  .then(completeData => {
    let guests = completeData.find((data) => data.hasOwnProperty('users')).users;
    let rooms = completeData.find((data) => data.hasOwnProperty('rooms')).rooms;
    let bookings = completeData.find((data) => data.hasOwnProperty('bookings')).bookings;
    let roomServices = completeData.find((data) => data.hasOwnProperty('roomServices')).roomServices;
    hotel = new Hotel(guests, rooms, bookings, roomServices);
  })

console.log(hotel.roomServices);

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

let today = domUpdates.findCurrentDate();
