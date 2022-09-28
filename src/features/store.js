import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/RocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});
