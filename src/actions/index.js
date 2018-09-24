export const filterAction = type => type;

export const addItem = text => {
  return {
    type: "ADD_ITEM",
    text
  };
};
export const editItem = index => {
  return {
    type: "EDIT_ITEM",
    index
  };
};
export const saveItem = (index, text) => {
  return {
    type: "SAVE_ITEM",
		index,
		text
  };
};
export const cancelEdit = index => {
  return {
    type: "CANCEL_EDIT",
    index
  };
};
export const toggleItem = index => {
  return {
    type: "TOGGLE_ITEM",
    index
  };
};
export const toggleAll = () => {
  return { type: "TOGGLE_ALL" };
};
export const deleteItem = index => {
  return {
    type: "DELETE_ITEM",
    index
  };
};
export const keyPressAction = keyCode => {
	switch(keyCode) {
		case 13:
		return {
			type: "ADD_ITEM",
			keyCode
		};
		
		default: 
			return {
				type: "KEY_PRESS",
				keyCode
			};

	}

};
