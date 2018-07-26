import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../container/Home';

describe('Component: Home', () => {
  it('renders five feature groups', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('.container-fluid').length).toEqual(1);
  });
});
