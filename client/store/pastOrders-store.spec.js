/* global describe beforeEach afterEach it */

import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import history from '../history';

import { createOrder, POST_ORDER } from './pastOrders';


const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('thunk creators', () => {
  let store;
  let mockAxios;
  let actions;

  const initialState = {};

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  })

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  })

  describe('createOrder', () => {
    it('eventually dispatches the POST_ORDER action', () => {
      const mockOrder = { data: 'tbd' };
      mockAxios.onPost('/api/past-orders').replyOnce(201, mockOrder);
      return store.dispatch(createOrder()).then(() => {
        actions = store.getActions();
        expect(actions[0].type).to.equal(POST_ORDER);
        expect(actions[0].order).to.deep.equal(mockOrder);
      });
    });
  });
});
