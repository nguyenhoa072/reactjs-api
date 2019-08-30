import React, { Component } from 'react'
import { connect } from 'react-redux';
import { delete_product_request } from './../../store/actions/products';
class ProductDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: []
    }
  }

  on_delete = (e) => {
    var id = [];

    //Reference the Table.
    var table = document.getElementById("table_body_1");

    //Reference all the CheckBoxes in Table.
    var checkBox = table.getElementsByTagName("input");

    // Loop and push the checked CheckBox value in Array.

    for (var i = 0; i < checkBox.length; i++) {
      if (checkBox[i].checked) {
        console.log('if')
        id.push(checkBox[i].id);
      }
    }

    this.setState({
        id: id
      });

    this.props.on_delete_product(id);

  }

  render() {

    console.log(this.props.onChange);

    return (
      <div className="col-auto mr-auto">
        {/* <span onClick={() => this.onClick('name', 1)} className={(productSort.by === 'name' && productSort.value === 1) ? "dropdown-item active" : "dropdown-item"} >A -&gt; Z</span> */}
        <button onChange={this.props.onChange} onClick={this.on_delete} type="button" className="btn btn-danger" disabled={(this.state.id > 0) ? "" : "disabled" }><i className="fa fa-trash-o fa-fw"></i> Xóa</button>
      </div>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDelete)
