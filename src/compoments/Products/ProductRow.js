import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { delete_product_request, get_id_products } from './../../store/actions/products';
import to_slug from '../../lib'

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

class ProductRow extends Component {

  on_delete = (id) => {
    if (confirm('Bạn có muốn xóa?')) { //eslint-disable-line
      this.props.on_delete_product(id)
    }
  }  

  Comment = (props) => {
    console.log(this.props.text);
  }

  render() {
    var { item } = this.props;

    return (
      <tr>
        <td>
          <div className="custom-control custom-checkbox">
            <input onClick={this.handleChange} type="checkbox" className="custom-control-input aaa" id={item.id} />
            <label className="custom-control-label" htmlFor={item.id}></label>
          </div>
        </td>
        <td><Link to={'product/' + to_slug(item.name) + '.' + item.id + '.html'}> {item.name} </Link></td>
        <td>{item.price}
        {this.Comment()}
        </td>
        <td>
          <span className={item.status === true ? 'badge badge-success' : 'badge badge-secondary'}>
            {item.status === true ? 'ON' : 'OFF'}
          </span>
        </td>
        <td>
          <div className="btn-group" role="group">
            <Link to={"/product/" + item.id + "/edit"} className="btn btn-outline-warning btn-sm">Sửa</Link>
            <button type="button" onClick={() => this.on_delete(item.id)} className="btn btn-outline-danger btn-sm">Xóa</button>
          </div>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // productGetIDs: state.productGetIDs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_delete_product: (id) => {
      dispatch(delete_product_request(id))
    },
    // on_get_id_products: (id) => {
    //   dispatch(get_id_products(id))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow)