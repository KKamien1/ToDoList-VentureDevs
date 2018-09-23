export const addItem = text => {
  return {
    type: "ADD_ITEM",
    payload: text
  };
};
export const selectItem = index => {
  return {
    type: "CHECKED_DONE",
    payload: index
  };
};
export const toggle = index => {
  return {
    type: "TOGGLE",
    payload: index
  };
};
export const deleteItem = index => {
  return {
    type: "DELETE_ITEM",
    payload: index
  };
};

export const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};
