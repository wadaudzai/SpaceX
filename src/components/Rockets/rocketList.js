import React from 'react';
import PropTypes, { Object } from 'prop-types';
import RocketCardItem from './rocketcard';
import '../../Styles/rocketList.css';

const RocketItemsList = (props) => {
  const { rockets } = props;

  return (
    <ul className="card-holder">
      { rockets.map((rocket) => <RocketCardItem key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

RocketItemsList.defaultProps = {
  rockets: [],
};

RocketItemsList.propTypes = {
  rockets: PropTypes.instanceOf(Object),
};

export default RocketItemsList;
