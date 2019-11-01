import React, { Component } from "react";
import {ContextConsumer} from "../Context";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {

  render() {
    var { items } = this.props;
    var elmItem = items.map((item, index) => {
      return (
        <ProductRow
          onChange={this.handleChange}
          key={index}
          index={index}
          item={item}
        />
      );
    });
    return (
      <ContextConsumer>
        {context => (
          <div className="card border-secondary">
            <h5 className="card-header text-white bg-secondary">
              Danh sách sản phẩm
            </h5>
            <div className="card-body">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th width="1%">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                          onClick={e => context.checkboxAll(e)} 
                          className="custom-control-input"
                          id="checkall"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="checkall"
                        ></label>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Price</th>
                    <th width="1%">Status</th>
                    <th width="1%">Actions</th>
                  </tr>
                </thead>
                <tbody id="table_body_1">{elmItem}</tbody>
              </table>
            </div>
          </div>
        )}
      </ContextConsumer>
    );
  }
}
