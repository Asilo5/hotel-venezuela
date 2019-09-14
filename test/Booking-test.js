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

})