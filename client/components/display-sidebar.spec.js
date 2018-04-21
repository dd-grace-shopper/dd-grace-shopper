/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import { spy } from 'sinon';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DisplaySidebar } from './DisplaySidebar';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('The DisplaySidebar button component', () => {
  it('calls an onClick handler', () => {
    const clickSpy = spy();
    const displaySidebarButton = shallow(<DisplaySidebar onClick={clickSpy} />);

    expect(clickSpy).not.to.have.been.called; // eslint-disable-line
    displaySidebarButton.simulate('click');
    expect(clickSpy).to.have.been.called; // eslint-disable-line
  });
});
