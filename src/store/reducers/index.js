import { combineReducers } from 'redux'
import products from './products'
import productGet from './productGet'
import productFilter from './productFilter'
import productSort from './productSort'

export default combineReducers({
  products,
  productGet,
  productFilter,
  productSort,
})
