import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { all_products_request } from './../../store/actions/products';
import ProductFilter from './ProductFilter';
import ProductSort from './ProductSort';
import ProductTable from './ProductTable';
import ProductAdd from './ProductAdd';
import ProductDelete from './ProductDelete';

class ProductList extends Component {

  componentDidMount() {
    this.props.all_products()
  }

  render() {
    var { products, productFilter, productSort } = this.props

    if (productFilter) {
      products = products.filter((item) => {
        return item.name.toLowerCase().indexOf(productFilter.trim()) !== -1;
      })
    }

    if (productSort.by === 'name') {
      products.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return productSort.value;
        else if (a.name.toLowerCase() < b.name.toLowerCase()) return -productSort.value;
        else return 0;
      });
    } else if (productSort.by === 'price') {
      products.sort((a, b) => {
        if (a.price > b.price) return productSort.value;
        else if (a.price < b.price) return -productSort.value;
        else return 0;
      });
    } else {
      products.sort((a, b) => {
        if (a.status > b.status) return -productSort.value;
        else if (a.status < b.status) return productSort.value;
        else return 0;
      });
    }

    return (
      <Fragment>
        <div className="row pb-3">        
          <ProductAdd />        
          <ProductDelete/>  
          <ProductFilter />          
          <ProductSort />
        </div>
        <ProductTable items={products} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    productFilter: state.productFilter,
    productSort: state.productSort,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    all_products: () => {
      dispatch(all_products_request())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)