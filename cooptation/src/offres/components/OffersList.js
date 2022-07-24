import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './OffersList.css';
import OffreItem from './OfferItem';

const OffreList = props => {
  if (props.items.length === 0) {
    return (
      <div className="grid_list center">
        <Card>
          <h2>No offres found. Maybe create one?</h2>
          <Button to="/offres/new">Share Offre</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="grid_list">
      {props.items.map(offre => (
        <OffreItem
          key={offre.id}
          id={offre.id}
          image={offre.image}
          name={offre.name}
          description={offre.description}
         
        />
      ))}
    </ul>
  );
};

export default OffreList;
