const filterReducer = (state = "SHOW-ALL", action) => {
  switch (action.type) {
    case "SHOW-DONE":
      return "SHOW-DONE";
    case "SHOW-TODO":
      return "SHOW-TODO";
    case "SEARCH":
      return action.text;
    default:
      return "SHOW-ALL";
  }
};

export default filterReducer;
