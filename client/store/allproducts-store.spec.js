/* global describe beforeEach afterEach it */

import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import history from '../history';

import { fetchProducts, getProducts } from './allproducts';
import { reducer } from './index';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('thunk creators', () => {
  let store;
  let mockAxios;

  const initialState = { products: {} };

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
