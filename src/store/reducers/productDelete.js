import * as actionTypes from '../actions/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_ID_PRODUCTS:
      return action.id

    default:
      return state
  }
}