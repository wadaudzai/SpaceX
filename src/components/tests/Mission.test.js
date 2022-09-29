import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Missions from '../Missions/Mission';
import store from '../../features/store';

describe('Test for missions.', () => {
  test('Missions snapshot.', () => {
    const missionTest = render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    expect(missionTest).toMatchSnapshot();
  });
});
