import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.shops.map(shops => (
      <Card key={shops.id} shops={shops} />
    ))}
  </div>
);
