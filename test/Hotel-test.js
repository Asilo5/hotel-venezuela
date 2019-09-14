import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import sampleData from '../src/sample-data/all-sample-data'

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(sampleData);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  })

  it('should show all room service charges for that date', () => {
    expect(hotel.dailyRoomServiceCharges(date)).to.eql();
  })

  it('should show all bookings for that date', () => {
    expect(hotel.dailyBookings(date)).to.eql();
  })

  it('should use the name of the guest to find the ID', () => {
    expect(hotel.searchGuestInAllData(name)).to.eql();
  })

  it('should find existing guest', () => {
    expect(hotel.findExistingGuest(name)).to.eql();
  })

  it('should add guest to data', () => {
    expect(hotel.addGuest(name)).to.eql();
  })

  it('should return rooms available today', () => {
    expect(hotel.roomsAvailableToday(date)).to.eql();
  })

  it('should return revenue today', () => {
    expect(hotel.revenueToday(date)).to.eql();
  })

  it('should return percent of rooms occupied today', () => {
    expect(hotel.roomsPercentOccupiedToday(date)).to.eql();
  })

  it('should return most popular booking date', () => {
    expect(hotel.popularBookingDate()).to.equal();
  })

  it('should return date with most rooms available', () => {
    expect(hotel.mostRoomsAvailableDay()).to.equal();
  })

  it('should filter rooms by type', () => {
    expect(hotel.filterRoomsByType(type)).to.equal();
  })

})