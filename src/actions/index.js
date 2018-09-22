export const selectItem = item => {
  console.log("Click", item);
  return {
    type: "CHECKED_DONE",
    payload: item
  };
};
