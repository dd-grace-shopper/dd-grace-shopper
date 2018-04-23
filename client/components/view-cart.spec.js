/* global describe beforeEach it */

import React from 'react';
import { Link } from 'react-router-dom';
import ViewCart from './ViewCart';

import { expect } from 'chai';
import { spy } from 'sinon';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('The ViewCart component', () => {
  let mockRenderedCart;
  const productsInCart = [
    {
      productId: 1,
      name: 'D & D Red Wine',
      price: 99.99,
      quantity: 2,
      imageUrl:
        'https://images.crateandbarrel.com/is/image/Crate/OregonBigRedWine21ozSHF15/?$web_product_hero$&150817110052&wid=625&hei=625'
    },
    {
      productId: 2,
      name: 'Kendall Jackson Cabernet Sauvignon',
      price: 19.99,
      quantity: 1,
      imageUrl:
        'http://www.totalwine.com/media/sys_master/twmmedia/hb4/h76/8807386742814.png'
    },
    {
      productId: 3,
      name: 'D & D White Wine',
      price: 49.99,
      quantity: 2,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/White_Wine_Glas.jpg/220px-White_Wine_Glas.jpg'
    }
  ];
  const total = 169.97;
  const numItems = 5;
  const checkoutFormLink = '/checkout';
  const handleUpdate = spy();
  const handleDelete = spy();
  const emptyCartMessage = 'Your cart\'s empty. Buy something!';
  beforeEach(() => {
    mockRenderedCart = shallow(<ViewCart
      total={total}
      numItems={numItems}
      productsInCart={productsInCart}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />);
  });

  it('Renders a table of items in the cart if there are items in cart', () => {
    expect(mockRenderedCart.find('table')).to.have.lengthOf(1);
  });
  it('Renders a table that includes Price and Quantity fields', () => {
    const headers = mockRenderedCart.find('thead').text();
    expect(headers).to.include('Price');
    expect(headers).to.include('Quantity');
  });
  it('Renders a table with a row for each kind of product in the cart', () => {
    expect(mockRenderedCart.find('.cartItem')).to.have.lengthOf(productsInCart.length);
  });
  // To do: add tests for info fields in given row

  it('Supplies a user with information regarding order subtotal and number of items in cart', () => {
    const subtotalInfo = mockRenderedCart.find('.cart-subtotal').text();
    expect(subtotalInfo).to.include(numItems);
    expect(subtotalInfo).to.include(total);
  });

  it('Links to a checkout form', () => {
    expect(mockRenderedCart.find(Link).props().to).to.equal(checkoutFormLink);
  })

  it('Provides an informative message if there are no items in the cart', () => {
    const mockEmptyCart = shallow(<ViewCart
      total={0}
      numItems={0}
      productsInCart={null}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />);
    expect(mockEmptyCart.find('.empty-cart-message').text()).to.equal(emptyCartMessage);
  });
});
