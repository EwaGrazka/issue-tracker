import React from 'react';
import { AddItem, AddItemForm } from '../AddItemForm/AddItemForm';
import { List } from '../List/List';
import './Home.scss';
import { v4 as uuidv4 } from 'uuid';
import { ListReducer } from '../../reducers/ListReducer';


export const Home = () => {

  const initialList = [
    {
      id: '1',
      title: 'Add input with title',
      description: 'An issue should have at least a title',
      status: 'closed',
    },
    {
      id: '2',
      title: 'Add animations',
      description: 'The application needs simple, subtle animations',
      status: 'pending',
    },
  ];
  const [listData, dispatchListData] = React.useReducer(ListReducer, {
    list: initialList,
    isShowList: true,
  });

  const [form, setForm] = React.useState({
    title: '',
    description: '',
    status: '',
    isComplete: false,
  });

  function handleAdd() {
    dispatchListData({ type: 'ADD_ITEM', form, id: uuidv4() });
  }

  function handleRemove(id) {
    dispatchListData({ type: 'REMOVE_ITEM', id });
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setForm({
      title: '',
      description: '',
      status: 'open',
      isComplete: false
    });
    handleAdd()
  };

  if (!listData.isShowList) {
    return null;
  }

  return (
    <div className='home'>
      <h2>Add ticket to the list</h2>
      <AddItemForm
        onChange={handleChange}
        onAdd={handleAdd}
        handleChange={handleChange} handleSubmit={handleSubmit} form={form}
      />
      <h2>Manage your tickets</h2>
      <div>
        <List list={listData.list} onRemove={handleRemove} />
      </div>

    </div>

  );
};