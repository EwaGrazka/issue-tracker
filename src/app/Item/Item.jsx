import React from 'react';
import './Item.scss';

export const Item = ({ item }) => {
  console.log(item)
  return (
    <li>
      <p className='title'>{item.title}</p>
      <p className='description'>{item.description}</p>
      <p className='status'>{item.status}</p>
    </li>

  );
};