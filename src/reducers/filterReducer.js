const filterReducer = (state = "show-all", action) => {
  console.log("--------FILTER---------", action);
  switch (action.type) {
    case "show-done":
      return "show-done";
    case "show-todo":
      return "show-todo";
    default:
      return "show-all";
  }
};

export default filterReducer;
