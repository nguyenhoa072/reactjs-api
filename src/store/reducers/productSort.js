import * as actionTypes from '../actions/actionTypes';

const initialState = {
  by: '',
  value: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SORT_PRODUCT:   
      return {
        by: action.sort.by,
        value: action.sort.value,
      }

    default:
      return state
  }
}