/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SidebarLeft from './Sidebar';
import { Sidebar, Menu } from 'semantic-ui-react';

const adapter = new Adapter();
enzyme.configure({ adapter });


describe('The SidebarLeft component', () => {
  const sidebarLeft = shallow(<SidebarLeft visible={true} products={products} productsById={productsById} />);
  const semanticUiSidebarComponentProps = sidebarLeft.find(Sidebar).props();

  it('Implements the Semantic UI Sidebar component as a Menu', () => {
    expect(semanticUiSidebarComponentProps.as).to.equal(Menu);
  });
  it('Implements the Semantic UI vertical inverted display', () => {
    expect(semanticUiSidebarComponentProps.className).to.equal('ui vertical inverted');
  });
  it('Implements the Semantic UI push animation', () => {
    expect(semanticUiSidebarComponentProps.animation).to.equal('push');
  });
});
