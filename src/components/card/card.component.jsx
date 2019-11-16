import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='shops'
      src={props.shops.thumbnailUrl}
    />
    <h2> {props.shops.businessId} : {props.shops.name} </h2>
    <p> {props.shops.review[0].comment} : {props.shops.review[0].author}</p>
  </div>
);
