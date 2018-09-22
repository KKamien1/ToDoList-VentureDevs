const initialState = {
  todos: [
    {
      text: "Get pearls",
      completed: false
    },
    {
      text: "Get Komfitury",
      completed: false
    }
  ],
  filter: "all"
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
