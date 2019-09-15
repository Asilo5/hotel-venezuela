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

  it('should show all bookings and services for that date', () => {
    expect(hotel.bookingsAndServicesForDay('2019/09/30', 'bookings')).to.eql(
      [
        { userID: 1, date: '2019/09/30', roomNumber: 4 },
        { userID: 5, date: '2019/09/30', roomNumber: 8 },
        { userID: 1, date: '2019/09/30', roomNumber: 18 }
      ]
    );
  })

  it('should use the name of the guest to find the ID', () => {
    expect(hotel.searchGuestInData('Winnifred Kris', 'users')).to.eql({ id: 6, name: 'Winnifred Kris' });
  })

  it('should find existing guest', () => {
    // USE SPY HERE
    expect(hotel.findExistingGuest('Winnifred Kris')).to.eql();
  })

  it.only('should add guest to data', () => {
    expect(hotel.addGuest('Consuelo')).to.eql();
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