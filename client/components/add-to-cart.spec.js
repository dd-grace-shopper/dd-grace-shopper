/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import { spy } from 'sinon';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddToCart } from './AddToCart';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('The AddToCart button component', () => {
  it('calls an onClick handler', () => {
    const clickSpy = spy();
    const addToCartButton = shallow(<AddToCart onClick={clickSpy} />);

    expect(clickSpy).not.to.have.been.called; // eslint-disable-line
    addToCartButton.simulate('click');
    expect(clickSpy).to.have.been.called; // eslint-disable-line
  });
});
