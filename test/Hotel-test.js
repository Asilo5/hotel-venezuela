import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import sampleData from '../src/sample-data/all-sample-data'

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(sampleData);
  });

  

})