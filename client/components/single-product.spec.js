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
  const dummyProductInfo = {
    name: 'Georgi',
    imageUrl: 'https://placekitten.com/200/300',
    description: 'In Russia, Georgi Vodkas You.',
    category: { category: 'Vodka' },
    country: { name: 'Russia' },
    size: { mililiter: 1000 },
    price: 27.99
  };

  beforeEach(() => {
    singleProduct = shallow(
      <SingleProduct product={dummyProductInfo} />
    );
  });

  it('Renders a product\'s name', () => {
    const nameInfo = singleProduct.find('.single-product-name').text();
    expect(nameInfo).to.include(dummyProductInfo.name);
  });
  it('Renders a product\'s image', () => {
    const productImgUrl = singleProduct.find('.single-product-img').props().src;
    expect(productImgUrl).to.equal(dummyProductInfo.imageUrl);
  });
  it('Renders a product\'s description', () => {
    const descriptionInfo = singleProduct.find('.single-product-description').text();
    expect(descriptionInfo).to.include(dummyProductInfo.description);
  });
  it('Renders a product\'s category', () => {
    const categoryInfo = singleProduct.find('.single-product-category').text();
    expect(categoryInfo).to.include(dummyProductInfo.category.category);
  });
  it('Renders a product\'s country', () => {
    const countryInfo = singleProduct.find('.single-product-country').text();
    expect(countryInfo).to.include(dummyProductInfo.country.name);
  });
  it('Renders a product\'s size in mililiters', () => {
    const sizeInfo = singleProduct.find('.single-product-size').text();
    expect(sizeInfo).to.include(dummyProductInfo.size.mililiter);
  });
  it('Renders a product\'s price', () => {
    const priceInfo = singleProduct.find('.single-product-price').text();
    expect(priceInfo).to.include(dummyProductInfo.price);
  });
});
