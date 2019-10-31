import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { delete_product_request } from './../../store/actions/products';
import to_slug from '../../lib'
import {ContextConsumer} from "./Context";

class ProductRow extends Component {

  on_delete = (id) => {
    if (confirm('Bạn có muốn xóa?')) { //eslint-disable-line
      this.props.on_delete_product(id)
    }
  }

  render() {
    var { item } = this.props;
    return (
      <ContextConsumer>
        {context => (
          <tr>
            <td>
              <div className="custom-control custom-checkbox">
                <input onClick={e => context.updateChecked(e.target.checked)} type="checkbox" className="custom-control-input checkbox" id={item.id} />
                <label className="custom-control-label" htmlFor={item.id}></label>
              </div>
            </td>
            <td><Link to={'product/' + to_slug(item.name) + '.' + item.id + '.html'}> {item.name} </Link></td>
            <td>{item.price}
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
        )}
      </ContextConsumer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_delete_product: (id) => {
      dispatch(delete_product_request(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow)