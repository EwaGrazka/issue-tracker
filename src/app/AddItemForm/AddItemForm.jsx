import React from 'react';

import './AddItemForm.scss';

export const AddItemForm = ({ handleChange, handleSubmit, form }) => {

  return (
    <form onSubmit={handleSubmit}>

      <div className="form__group field">
        <input
          value={form.title}
          onChange={handleChange}
          type='text'
          className="form__field"
          placeholder="Title"
          name="title"
          id='title'
          required />
        <label htmlFor="title" className="form__label">Title</label>
      </div>

      <div className="form__group field">
        <textarea
          value={form.description}
          onChange={handleChange}
          type='text'
          className="form__field"
          placeholder="Description"
          name="description"
          id='description'
          required />
        <label htmlFor="description" className="form__label">Description</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
