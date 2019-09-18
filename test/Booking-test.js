import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

import Booking from '../src/Bookings';
import Hotel from '../src/Hotel';
import sampleData from '../src/sample-data/all-sample-data'

describe('Booking', () => {
  let booking, hotel;

  beforeEach(() => {
    hotel = new Hotel(sampleData);
    booking = new Booking(6, 'Winnifred Kris', hotel);
  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  })

  it('should book a room for guest', () => {
    expect(booking.bookRoom('2019/09/14', 5)).to.eql({ userID: 6, date: '2019/09/14', roomNumber: 5 });
  })

  it('should unbook a room for guest', () => {

    expect(booking.unbookRoom('2019/09/21', 12)).to.eql();
  })

  it('should purchase room service for guest', () => {
    expect(booking.purchaseRoomService('2019/09/14', 'Rustic Cotton Sandwich')).to.eql({
      userID: 6,
      date: '2019/09/14',
      food: 'Rustic Cotton Sandwich',
      totalCost: 7.33
    });
  })

  it('should upgrade room for guest', () => {
    expect(booking.upgradeRoom('2019/09/14', 12, 48)).to.eql({ userID: 6, date: '2019/09/14', roomNumber: 48 });
  })

  it('should return summary of guests bookings', () => {
    expect(booking.summaryOfGuestBookings()).to.eql([
      { userID: 6, date: '2019/09/23', roomNumber: 9 },
      { userID: 6, date: '2019/09/14', roomNumber: 48 }
    ]);
  })

})