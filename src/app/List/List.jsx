import React from 'react';
import { Item } from '../Item/Item';
import './List.scss';

export const List = ({ list, onRemove }) => {

  return (
    <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};
