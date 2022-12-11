export const ListReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    case 'ADD_ITEM':
      return {
        ...state,
        list: state.list.concat({ title: action.form.title, id: action.id, description: action.form.description, status: action.form.status }),
      };


    default:
      throw new Error();
  }
};