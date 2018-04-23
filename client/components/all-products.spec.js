/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AllProducts } from './AllProducts';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';
import SidebarLeft from './Sidebar';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('The AllProducts component', () => {
  let allProducts;
  // for a given product:
  const id = 1;
  const name = 'Georgi';
  const price = 1500;
  const imageUrl = 'https://placekitten.com/200/300';

  describe('AllProducts rendering behavior for each product', () => {
    beforeEach(() => {
      allProducts = shallow(
        <AllProducts
          productsById={{ [id]: { name, price, imageUrl }}}
          products={[id]}
          sidebarVisible={false}
        />
      );
    });
    it('Renders a product\'s name', () => {
      let productName = allProducts.find('.all-products-product-name').text();
      expect(productName).to.equal(name);
    });
    it('Renders a product\'s name linking to that product\'s individual page', () => {
      let productLink = allProducts.find(Link).props().to;
      expect(productLink).to.equal(`products/${id}`);
    });
    it('Renders a product\'s imageUrl', () => {
      let productImgUrl = allProducts.find('.product-img').props().src;
      expect(productImgUrl).to.equal(imageUrl);
    });
    it('Renders an AddToCart button component', () => {
      expect(allProducts.find(AddToCart).length).to.equal(1); // eslint-disable-line
    });
    it('Passes a product\'s id as a prop to the AddToCart button component', () => {
      let addToCartProductId = allProducts.find(AddToCart).props().productId;
      expect(addToCartProductId).to.equal(id);
    });
  });

  describe('AllProducts sidebar rendering', () => {
    it('Renders the SidebarLeft component, visibly or not', () => {
      allProducts = shallow(
        <AllProducts
          productsById={{ [id]: { name, price, imageUrl }}}
          products={[id]}
          sidebarVisible={false}
        />
      );
      expect(allProducts.find(SidebarLeft).length).to.equal(1);
    });
    it('Renders product info in a container with a className of "all-products-container-with-sidebar" when the sidebar is visible', () => {
      allProducts = shallow(
        <AllProducts
          productsById={{ [id]: { name, price, imageUrl }}}
          products={[id]}
          sidebarVisible={true}
        />
      );
      expect(allProducts.find('.all-products-container-with-sidebar').length).to.equal(1);
      expect(allProducts.find('.all-products-container-no-sidebar').length).to.equal(0);
    });
    it('Renders product info in a container with a className of "all-products-container-no-sidebar" when the sidebar is not visible', () => {
      allProducts = shallow(
        <AllProducts
          productsById={{ [id]: { name, price, imageUrl }}}
          products={[id]}
          sidebarVisible={false}
        />
      );
      expect(allProducts.find('.all-products-container-with-sidebar').length).to.equal(0);
      expect(allProducts.find('.all-products-container-no-sidebar').length).to.equal(1);
    });
  });
});
