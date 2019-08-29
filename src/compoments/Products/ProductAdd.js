import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ProductAdd extends Component {
  render() {
    return (
      <div className="col-auto">
        <Link to="/product/add" className="btn btn-primary">Thêm sản phẩm</Link>
      </div>
    )
  }
}
