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
        list: state.list.concat({ title: action.form.title, id: action.id, description: action.form.description, status: 'open' }),
      };

    case 'UPDATE_ITEM': {
      const newList = state.list.map((item) => {
        if (item.id === action.id) {
          const updatedItem = {
            ...item,
            status: "pending",
          };

          return updatedItem;
        }

        return item;
      });

      return { ...state, list: newList };
    }



    default:
      throw new Error();
  }
};