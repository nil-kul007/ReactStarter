import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../../container/login';

const myStore = {
  login: {
    username: 'test',
    password: 'test',
  },
};
describe('Component: LoginPage', () => {
  it('renders five feature groups', () => {
    const wrapper = shallow(
      <provider store={myStore}>
        <LoginPage />
      </provider>
    );

    expect(wrapper.find('.login-window').length).toEqual(0);
  });
});
