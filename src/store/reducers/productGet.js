import * as actionTypes from '../actions/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_PRODUCT:
      return action.item

    default:
      return state
  }
}
