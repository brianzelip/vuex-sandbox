export const removeItemInUserSelecttions = (state, id) => {
  delete state.userSelecttions[id];
};

export const updateItemInUserSelecttions = (state, payload) => {};

export const updateItemQty = (state, payload) => {
  state.userSelecttions[payload.id].qty = payload.qty;
};

export const updateItemType = (state, payload) => {};

export const resetUserSelecttions = state => {
  state.userSelecttions = {};
};
