import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

describe('Component: Header', () => {
  const wrapper = shallow(<Header />);

  it('renders a Toolbar', () => {
    expect(wrapper.find('Link').exists()).toBe(true);
  });

  it('renders a title', () => {
    expect(wrapper.find('h1').text()).toBe('Online Store Management System');
  });

  it('renders an icon', () => {
    expect(wrapper.find('img[src="logo.png"]').exists()).toBe(true);
  });
});
