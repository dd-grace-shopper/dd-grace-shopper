/* global describe beforeEach afterEach it */

import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import history from '../history';

import products, {
  GET_PRODUCTS,
  getProducts,
  fetchProducts,
} from './allproducts';
import { reducer } from './index';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

const initialState = { products: {
  productsById: {},
  products: []
} };

const mockAllProductsState = {
  productsById: {
    1: {
      price: 9999,
      name: 'D & D Red Wine',
      categoryId: 1,
      sizeId: 3,
      description: 'Top shelf red wine from yours truly. ',
      countryId: 2,
      imageUrl:
        'https://images.crateandbarrel.com/is/image/Crate/OregonBigRedWine21ozSHF15/?$web_product_hero$&150817110052&wid=625&hei=625'
    },
    2: {
      price: 1999,
      name: 'Kendall Jackson Cabernet Sauvignon',
      categoryId: 1,
      sizeId: 3,
      description: 'Yummy red wine',
      countryId: 2,
      imageUrl:
        'http://www.totalwine.com/media/sys_master/twmmedia/hb4/h76/8807386742814.png'
    }
  },
  products: [1, 2]
};

describe.only('The `products` slice of state', () => {
  describe('action creators', () => {
    describe('getProducts', () => {
      it('Returns an object with a type of GET_PRODUCTS and a value including data structures on the products slice of state', () => {
        const gottenProducts = getProducts(mockAllProductsState);
        expect(gottenProducts.type).to.equal(GET_PRODUCTS);
        expect(gottenProducts.products).to.haveOwnProperty('productsById');
        expect(gottenProducts.products).to.haveOwnProperty('products');
        expect(gottenProducts.products).to.deep.equal(mockAllProductsState);
      });
    });
  });

  describe('thunk creators', () => {
    let store;
    let mockAxios;

    beforeEach(() => {
      mockAxios = new MockAdapter(axios);
      store = mockStore(initialState);
    });
    afterEach(() => {
      mockAxios.restore();
      store.clearActions();
    });

    describe('fetchProducts', () => {
      it('eventually dispatches the GET_PRODUCTS action', () => {
        const fakeProduct = { name: 'Georgi', price: 1500 };
        mockAxios.onGet('/api/products').replyOnce(200, fakeProduct);
        return store.dispatch(fetchProducts()).then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.be.equal('GET_PRODUCTS');
          expect(actions[0].products).to.be.deep.equal(fakeProduct);
        });
      });
    });
  });

  describe('products reducer', () => {
    let newState;
    it('GET_PRODUCTS action reduces to loaded-in product info', () => {
      newState = products(initialState, getProducts(mockAllProductsState));
      expect(newState).to.deep.equal(mockAllProductsState);
    });
    it('Reduces to state by default', () => {
      newState = products(initialState, { type: null });
      expect(newState).to.deep.equal(initialState);
    });
  });
});
