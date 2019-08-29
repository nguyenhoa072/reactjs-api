import { combineReducers } from 'redux'
import products from './products'
import productGet from './productGet'
import productFilter from './productFilter'
import productSort from './productSort'
import productGetIDs from './productDelete'

export default combineReducers({
  products,
  productGet,
  productFilter,
  productSort,
  productGetIDs
})
