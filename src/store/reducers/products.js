import * as actionTypes from './../actions/actionTypes';

var findIndex = (products, id) => {
  var result = -1;
  products.forEach((item, index) => {
    if (item.id === id) {
      result = index;
    }
  });
  return result;
}

const initialState = []

export default (state = initialState, action) => {

  var { id, item } = action;
  var index = -1;

  switch (action.type) {

    case actionTypes.ALL_PRODUCTS:
      state = action.products
      return [...state]

    case actionTypes.DELETE_PRODUCT:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state]

    case actionTypes.ADD_PRODUCT:
      state.push(action.item)
      return [...state]

    case actionTypes.UPDATE_PRODUCT:
        index = findIndex(state, item.id);
        state[index] = item
      return [...state]

    default:
      return state
  }
}
