import * as ActionTypes from './actionTypes';
import apiData from './../../lib/apiData';

export const all_products = (products) => {
  return {
    type: ActionTypes.ALL_PRODUCTS,
    products
  }
}

export const all_products_request = () => {
  return async (dispatch) => {
    const response = await apiData('products', 'get', null);
    dispatch(all_products(response.data));
  }
}

export const delete_product = (id) => {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    id
  }
}

export const delete_product_request = (id) => {
  return dispatch => apiData(`products/${id}`, 'DELETE', null).then((response) => {
    dispatch(delete_product(id));
  })
}

export const add_product = (item) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    item
  }
}

export const add_product_request = (item) => {
  return dispatch => apiData('products', 'post', item).then(response => {
    dispatch(add_product(response.data));
  })
}

export const get_product = (item) => {
  return {
    type: ActionTypes.GET_PRODUCT,
    item
  }
}

export const get_product_request = (id) => {
  return dispatch => apiData(`products/${id}`, 'get', null).then(response => {
    dispatch(get_product(response.data));
  })
}

export const update_product = (item) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    item
  }
}

export const update_product_request = (item) => {
  return dispatch => apiData(`products/${item.id}`, 'put', item).then(response => {
    dispatch(update_product(response.data));
  })
}

export const filter_product = (title) => {
  return { 
    type: ActionTypes.FILTER_TABLE,
    title
  }
}

export const sort_product = (sort) => {
  return { 
    type: ActionTypes.SORT_PRODUCT,
    sort
  }
}

export const get_id_products = (id) => {
  return { 
    type: ActionTypes.GET_ID_PRODUCTS,
    id
  }
}
