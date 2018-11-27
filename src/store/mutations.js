export const ADD_ITEM_TO_USER_SELECTION = (state, payload) => {
  // payload should be an item object
  // state.userSelection = { ...state.userSelection, [payload.id]: payload };
};
export const REMOVE_ITEM_FROM_USER_SELECTION = (state, payload) => {
  // payload should be an item id string
  state.userSelection = Object.keys(state)
    .filter(key => key !== payload)
    .reduce((acc, key) => {
      acc[key] = state[key];
      return acc;
    }, {});
};
export const UPDATE_ITEM_QTY = (state, payload) => {};
export const UPDATE_ITEM_TYPE = (state, payload) => {};
export const RESET_USER_SELECTION = state => {
  state.userSelection = {};
};

// remove item from userSelection

// update item qty

// update item store
