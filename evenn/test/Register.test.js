import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { Register } from '../src/features/event/Register';

Enzyme.configure({ adapter: new Adapter() });

describe('<Register />', () => {
  it('Should render title correctly', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('.title').text()).to.equal('Evenn Registration Form');
  });
});
