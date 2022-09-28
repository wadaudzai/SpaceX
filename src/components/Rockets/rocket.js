import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import RocketItemsList from './rocketList';
import { fetchingRocketsInfo } from '../../features/Rockets/RocketSlice';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingRocketsInfo());
  }, []);

  return (
    <Container>
      <RocketItemsList rockets={rockets} />
    </Container>
  );
};

export default MyRockets;
