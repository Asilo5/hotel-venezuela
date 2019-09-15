
import $ from 'jquery';
import domUpdates from "./domUpdates";
import './css/base.scss';
 
let hotel;

console.log('This is the JavaScript entry file - your code begins here.');

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
