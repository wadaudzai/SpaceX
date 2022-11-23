import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/RocketSlice';
import missionsReducer, { fetchMissions } from './mission/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});
store.dispatch(fetchMissions());

export default store;
