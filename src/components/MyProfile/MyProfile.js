import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReservedRockets = myRockets.filter((rocket) => rocket.reserved === true);

  const missionsData = useSelector((state) => state.missions);
  const reservedMissions = missionsData.filter((missions) => missions.reserved);

  return (
    <Container>
      <ListGroup className="w-25">
        <h2>My Rockets</h2>
        {!myReservedRockets.length ? (<p className="text-danger">You haven&apos;t select any rocket yet</p>
        ) : (
          myReservedRockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))
        )}
      </ListGroup>
      <ListGroup className="w-25">
        <div className="missions">
          <h2>My Missions</h2>
          <div className="myProfile">
            {
            reservedMissions.map((missions) => (
              <div key={missions.mission_id} className="myprofeach">
                <p>{missions.mission_name}</p>
              </div>
            ))
          }
          </div>
        </div>
      </ListGroup>
    </Container>
  );
};

export default MyProfile;
