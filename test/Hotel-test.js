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

})