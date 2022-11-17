import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets
          .map((pn) => (
            <PlanetCard
              key={ pn.name }
              planetName={ pn.name }
              planetImage={ pn.image }
            />
          ))}
      </div>
    );
  }
}

export default SolarSystem;
