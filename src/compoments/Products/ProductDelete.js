import React, { Component } from "react";
import { connect } from "react-redux";
import { delete_product_request } from "../../store/actions/products";

import {ContextConsumer} from "../Context";

class ProductDelete extends Component {
  on_delete = e => {
    var id = [];

    //Reference the Table.
    var table = document.getElementById("table_body_1");

    //Reference all the CheckBoxes in Table.
    var checkBox = table.getElementsByTagName("input");

    // Loop and push the checked CheckBox value in Array.
    for (var i = 0; i < checkBox.length; i++) {
      if (checkBox[i].checked) {
        id.push(checkBox[i].id);
      }
    }

    this.props.on_delete_product(id);
  };

  render() {
    return (
      <ContextConsumer>
        {context => (
          <div className="col-auto mr-auto">
            { console.log(context.number) }
            {context.number > 1 ? (
              <button type="button"
                onClick={this.on_delete}                
                className="btn btn-danger"
              >
                <i className="fa fa-trash-o fa-fw"></i> Xóa
              </button>
            ) : (
              <button type="button"
                disabled              
                className="btn btn-danger"
              >
                <i className="fa fa-trash-o fa-fw"></i> Xóa
              </button>
            )}
          </div>
        )}
      </ContextConsumer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_delete_product: id => {
      dispatch(delete_product_request(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDelete);
