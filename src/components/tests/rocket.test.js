import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import MyRockets from '../Rockets/rocket';
import store from '../../features/store';

describe('Test for rockets.', () => {
  test('Rockets snapshot.', () => {
    const rocketTest = render(
      <Provider store={store}>
        <Router>
          <MyRockets />
        </Router>
      </Provider>,
    );
    expect(rocketTest).toMatchSnapshot();
  });
});
