import chai from 'chai';
const expect = chai.expect;

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

  it.only('should book a room for guest', () => {
    expect(booking.bookRoom('2019/09/14', 5)).to.eql({ userID: 6, date: '2019/09/14', roomNumber: 5 });
  })

  it('should unbook a room for guest', () => {
    expect(booking.unbookRoom(date)).to.eql();
  })

  it('should purchase room service for guest', () => {
    expect(booking.purchaseRoomService(date)).to.eql();
  })

  it('should upgrade room for guest', () => {
    expect(booking.upgradeRoom()).to.eql();
  })

  it('should return summary of guests bookings', () => {
    expect(booking.summaryOfGuestBookings()).to.eql();
  })

})