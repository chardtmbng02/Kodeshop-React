import React from 'react';

export const Product = (props) => {
  return (
    <>
      <div className="card" key={props.id}>
        <p className="id">{props.id}</p>
        <p className="name">{props.name}</p>
        <p className="info">
          <span>${props.price}</span>
          <span className={props.in_stock ? 'instock' : 'unavailable'}>
            {props.in_stock ? 'Instock' : 'Unavailable'}
          </span>
        </p>
      </div>
      <br />
    </>
  );
};
