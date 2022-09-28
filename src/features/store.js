import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/RocketSlice';
import missionsReducer from './mission/missionSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});
