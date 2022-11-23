import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.style.css';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReservedRockets = myRockets.filter((rocket) => rocket.reserved === true);

  const missionsData = useSelector((state) => state.missions);
  const reservedMissions = missionsData.filter((missions) => missions.reserved);

  return (
    <section className="container">
      <div className="rockets">
        <h2>My Rockets</h2>
        <div className="profile">
          {
            myReservedRockets.map((rocket) => (
              <div key={rocket.id} className="item">
                <p>{rocket.name}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="missions">
        <h2>My Missions</h2>
        <div className="profile">
          {reservedMissions.map((missions) => (
            <div key={missions.mission_id} className="item">
              <p>{missions.mission_name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
