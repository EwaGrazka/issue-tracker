import React from 'react';
import './Item.scss';

export const Item = ({ item, onRemove, handleToggleComplete }) => {
  console.log(item)
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
          onClick={() => console.log("update-issue in progress")}>Change status</button>

        <button className='remove-button' type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </li>

  );
};