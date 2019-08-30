import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {

  componentDidUpdate() {
    var checkboxes = document.querySelectorAll('input.aaa'),
      checkall = document.getElementById('checkall');

    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].onclick = function () {
        var checkedCount = document.querySelectorAll('input.aaa:checked').length;

        checkall.checked = checkedCount > 0;
        checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
      }
    }

    checkall.onclick = function () {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
      }
    }
  }

  render() {
    var { items, onChangeA } = this.props;
    console.log(onChangeA);
    var elmItem = items.map((item, index) => {
      return <ProductRow onChange={this.handleChange} key={index} index={index} item={item} />
    })
    return (
      <div className="card border-secondary">
        <h5 className="card-header text-white bg-secondary">Danh sách sản phẩm</h5>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th width="1%">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="checkall" />
                    <label className="custom-control-label" htmlFor="checkall"></label>
                  </div>
                </th>
                <th>Name</th>
                <th>Price</th>
                <th width="1%">Status</th>
                <th width="1%">Actions</th>
              </tr>
            </thead>
            <tbody id="table_body_1">
              {elmItem}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
