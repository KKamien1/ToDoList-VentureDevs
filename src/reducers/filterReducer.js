const initialState = {
  filter: "all"
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      {
        console.log(action.payload);
        state.todos[action.payload].completed = !state.todos[action.payload]
          .completed;
        console.log("state w reducer", state);
        return state;
      }
      break;
    case "SHOW_COMPLETED":
      {
        console.log(action.payload);
        state.todos[action.payload].completed = !state.todos[action.payload]
          .completed;
        console.log("state w reducer", state);
        return state;
      }
      break;
    case "SHOW_INCOMPLETED":
      {
        console.log(action.payload);
        state.todos[action.payload].completed = !state.todos[action.payload]
          .completed;
        console.log("state w reducer", state);
        return state;
      }
      break;
    default:
      return state;
  }
};

export default filterReducer;
