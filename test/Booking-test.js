import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Booking';
import sampleData from '../src/sample-data/all-sample-data'

describe('Booking', () => {
  let booking;

  beforeEach(() => {
    booking = new Booking(sampleData);
  });

  

})