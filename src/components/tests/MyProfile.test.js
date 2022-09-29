import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import MyProfile from '../MyProfile/MyProfile';
import store from '../../features/store';

describe('Test for profile.', () => {
  test('profile snapshot.', () => {
    const profileTest = render(
      <Provider store={store}>
        <Router>
          <MyProfile />
        </Router>
      </Provider>,
    );
    expect(profileTest).toMatchSnapshot();
  });
});
