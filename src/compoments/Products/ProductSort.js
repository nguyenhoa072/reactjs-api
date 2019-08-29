import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sort_product } from './../../store/actions/products'
class ProductSort extends Component {

  onClick = (a, b) => {
    this.props.on_sort_product({
      by: a,
      value: b,
    })
  }

  render() {
    var { productSort } = this.props;
    console.log(productSort)
    return (
      <div className="col-auto">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">Sắp xếp</button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <span onClick={() => this.onClick('name', 1)} className={(productSort.by === 'name' && productSort.value === 1) ? "dropdown-item active" : "dropdown-item"} >A -&gt; Z</span>
            <span onClick={() => this.onClick('name', -1)}  className={(productSort.by === 'name' && productSort.value === -1) ? "dropdown-item active" : "dropdown-item"}>Z -&gt; A</span>
            <span onClick={() => this.onClick('status', 1)} className={(productSort.by === 'status' && productSort.value === 1) ? "dropdown-item active" : "dropdown-item"}>On</span>
            <span onClick={() => this.onClick('status', -1)} className={(productSort.by === 'status' && productSort.value === -1) ? "dropdown-item active" : "dropdown-item"}>Off</span>
            <span onClick={() => this.onClick('price', 1)} className={(productSort.by === 'price' && productSort.value === 1) ? "dropdown-item active" : "dropdown-item"}>Giá tăng dần</span>
            <span onClick={() => this.onClick('price', -1)} className={(productSort.by === 'price' && productSort.value === -1) ? "dropdown-item active" : "dropdown-item"}>Giá giảm dần</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productSort: state.productSort
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_sort_product: (sort) => {
      dispatch(sort_product(sort))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSort)