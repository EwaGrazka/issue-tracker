import React from 'react';
import './Item.scss';

export const Item = ({ item, onRemove, onStatusChange }) => {
  return (
    <li>
      <p className='title'>{item.title}</p>
      <p className='description'>{item.description}</p>
      <p className=
        'status'>{item.status}</p>

      <div className='buttons-wrapper'>
        <button
          className='update-button'
          type="button"
          onClick={() => onStatusChange(item.id)}>Mark as pending</button>
        <button className='remove-button' type="button" onClick={() => onRemove(item.id)}>
          Close and remove
        </button>
      </div>
    </li >

  );
};