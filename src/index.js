// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import domUpdates from "./domUpdates";

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
 

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
