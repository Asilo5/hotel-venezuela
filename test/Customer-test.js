import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import Hotel from '../src/Hotel';
import sampleData from '../src/sample-data/all-sample-data'

describe('Customer', () => {
  let customer, hotel;

  beforeEach(() => { 
    hotel = new Hotel(sampleData);
    customer = new Customer(6, 'Winnifred Kris', hotel);
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  })

  it('should return brokendown services from guest', () => {
    expect(customer.roomServiceBreakDown()).to.eql([
      {
        userID: 6,
        date: '2019/09/23',
        food: 'Tasty Granite Sandwich',
        totalCost: 18.73
      },
      {
        userID: 6,
        date: '2019/09/21',
        food: 'Refined Cotton Sandwich',
        totalCost: 13.45
      },
      {
        userID: 6,
        date: '2019/9/23',
        food: 'Refined Cotton Sandwich',
        totalCost: 8.68
      },
      {
        userID: 6,
        date: '2019/09/14',
        food: 'Rustic Cotton Sandwich',
        totalCost: 7.33
      }
    ]);
  })

  it('should return total of all room service for today', () => {
    expect(customer.totalRoomServiceToday('2019/09/21')).to.equal(13.45);
  })

  it('should return overall room service total', () => {
    expect(customer.overallRoomServiceTotal()).to.equal(48.19);
  })

  it('should instantiate new class of bookings', () => {
    expect(customer.bookingsFromGuest()).to.equal()
  })
})