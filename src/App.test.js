import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from './features/store';
import App from './App';

describe('Test for main.', () => {
  test('App snapshot.', () => {
    const appTest = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(appTest).toMatchSnapshot();
  });
});
