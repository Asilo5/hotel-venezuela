import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import sampleData from '../src/sample-data/all-sample-data'

describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(sampleData);
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  })

  it('should return brokendown services from guest', () => {
    expect(customer.roomServiceBreakDown(name)).to.eql();
  })

  it('should return total of all room service for today', () => {
    expect(customer.totalRoomServiceToday(name, date)).to.eql();
  })

  it('should return overall room service total', () => {
    expect(customer.overallRoomServiceTotal(name)).to.equal(0);
  })

  it('should instantiate new class of bookings', () => {
    expect(customer.bookingsFromGuest()).to.equal()
  })
})