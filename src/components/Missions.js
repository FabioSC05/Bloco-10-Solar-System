import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions
          .map((mi) => (
            <MissionCard
              key={ mi.name }
              name={ mi.name }
              year={ mi.year }
              country={ mi.country }
              destination={ mi.destination }
            />
          ))}
      </div>
    );
  }
}

export default Missions;
