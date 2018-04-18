/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingleProduct from './SingleProduct';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('Single Product', () => {
  let singleProduct;

  beforeEach(() => {
    singleProduct = shallow(
      <SingleProduct product={{ name: 'Georgi', price: 1500 }} />
    );
  });

  it('renders the name in an h1', () => {
    expect(singleProduct.find('h1').text()).to.be.equal('Name: Georgi');
  });
});
