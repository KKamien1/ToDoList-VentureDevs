const initialState = [
  {
    text: "Get pearls",
    completed: false
  },
  {
    text: "Get Komfitury",
    completed: false
  }
];

const todoReducer = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case "CHECKED_DONE":
      return state.map((todo, index) => {
        if (index === action.payload) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    case "ADD_ITEM":
      if (!action.payload) return state;
      return [
        ...state,
        {
          text: action.payload,
          completed: false
        }
      ];
    case "TOGGLE": {
      state.todos[action.payload].completed = !state.todos[action.payload]
        .completed;
      return state;
    }
    case "DELETE_ITEM":
      return state.filter((todo, index) => index !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;
