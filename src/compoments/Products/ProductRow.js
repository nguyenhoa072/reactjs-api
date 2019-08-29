import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { delete_product_request, get_id_products } from './../../store/actions/products';
import to_slug from '../../lib'

class ProductRow extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ids: []
  //   }
  // }

  on_delete = (id) => {
    if (confirm('Bạn có muốn xóa?')) { //eslint-disable-line
      this.props.on_delete_product(id)
    }
  }

  // handleChange = (e) => {
  //   //Reference the Table.
  //   var a_table = document.getElementById("table_body_1");

  //   //Reference all the CheckBoxes in Table.
  //   var checkBox = a_table.getElementsByTagName("input");

  //   const id = e.target.id;
  //   const ids = this.state.ids;
  //   let index
  //   console.log(checkBox)
  //   for (var i = 0; i < checkBox.length; i++) {
  //     console.log(e.target)
  //     if (e.target.checked) {
  //       console.log(checkBox[i])
  //       // add the numerical value of the checkbox to options array
  //       // console.log('if')
  //       // console.log("ID lay dc la: ", id)
  //       ids.push(checkBox[i].id)
  //       // console.log("In ra sanh sach id sau khi lay: ",ids)
  //     } else {
  //       // console.log('else')
  //       // or remove the value from the unchecked checkbox from the array
  //       index = ids.indexOf(checkBox[i].id)
  //       ids.splice(index, 1)
  //     }
  //   }

  //   this.props.on_get_id_products(ids);

  //   this.setState({
  //     ids: ids
  //   })
  // };

  render() {
    var { item } = this.props;
    // console.log(productGetIDs)
    return (
      <tr>
        <td>
          <div className="custom-control custom-checkbox">
            <input onClick={this.handleChange} type="checkbox" className="custom-control-input aaa" id={item.id} />
            <label className="custom-control-label" htmlFor={item.id}></label>
          </div>
        </td>
        <td><Link to={'product/' + to_slug(item.name) + '.' + item.id + '.html'}> {item.name} </Link></td>
        <td>{item.price}</td>
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