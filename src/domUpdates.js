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
  }

};

export default domUpdates;