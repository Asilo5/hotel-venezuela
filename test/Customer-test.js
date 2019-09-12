import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import sampleData from '../src/sample-data/all-sample-data'

describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(sampleData);
  });

  

})