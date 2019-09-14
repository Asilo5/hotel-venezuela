import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Bookings';
import sampleData from '../src/sample-data/all-sample-data'

describe('Booking', () => {
  let booking;

  beforeEach(() => {
    booking = new Booking(sampleData);
  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  })

  it('should book a room for guest', () => {
    expect(booking.bookRoom(name, date)).to.eql();
  })

  it('should unbook a room for guest', () => {
    expect(booking.unbookRoom(name, date)).to.eql();
  })

  it('should purchase room service for guest', () => {
    expect(booking.purchaseRoomService(name, date)).to.eql();
  })

  it('should upgrade room for guest', () => {
    expect(booking.upgradeRoom(name)).to.eql();
  })

  it('should return summary of guests bookings', () => {
    expect(booking.summaryOfGuestBookings(name)).to.eql();
  })

})