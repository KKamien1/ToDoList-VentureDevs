const initialState = [
  {
    text: "Get pearls",
    completed: false
  },
  {
    text: "Get Komfitury",
		completed: true
  }
];

const todosReducer = (state = initialState, action) => {
  console.log("------------todosReducer---------state, action", state, action);
  switch (action.type) {
    case "ADD_ITEM":
      return action.text
        ? [
					{
						text: action.text,
						completed: false
					},
            ...state
          ]
				: state;
				
		case "EDIT_ITEM": {
			return state.map((todo, index) => {
				return index === action.index
				? Object.assign({}, todo, { edition: true })
				: Object.assign({}, todo, { edition: false });
			});
		}
		case "SAVE_ITEM": {
			return state.map((todo, index) => {
				return index === action.index
				? Object.assign({}, todo, { text: action.text, edition:false })
				: todo
			});
		}
		case "CANCEL_EDIT": {
			return state.map((todo, index) => {
				delete todo.edition
				return todo
			});
		}

    case "TOGGLE_ITEM":
      return state.map((todo, index) => {
        return index === action.index
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo;
      });

    case "TOGGLE_ALL":
      return state.map(todo =>
        Object.assign({}, todo, { completed: !todo.completed })
      );

    case "DELETE_ITEM":
      return state.filter((todo, index) => index !== action.index);

    default:
      return state;
  }
};

export default todosReducer;
