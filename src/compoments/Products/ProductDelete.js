import React, { Component } from 'react'
import { connect } from 'react-redux';
import { get_id_products } from './../../store/actions/products';
class ProductDelete extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id_list: []
  //   }
  // }

  on_delete = (e) => {
    var id_list = [];

    //Reference the Table.
    var table = document.getElementById("table_body_1");

    //Reference all the CheckBoxes in Table.
    var checkBox = table.getElementsByTagName("input");

    var index;
    const id = e.target.id;

    console.log(checkBox.length)

    // Loop and push the checked CheckBox value in Array.
    for (var i = 0; i < checkBox.length; i++) {
      if (checkBox[i].checked) {
        // console.log('if')
        id_list.push(checkBox[i].id);
        // selected.push(chks[i].value);
      } 
      // else {
      //   console.log('else')
      //   index = id_list.indexOf(+e.target.id)
      //   id_list.splice(index, 1)
      // }
    }

    console.log(id_list)

    // this.props.on_delete_product(id_list);

  }

  render() {

    // var { productGetIDs } = this.props;
    // console.log(productGetIDs)

    return (
      <div className="col-auto mr-auto">
        <button onClick={this.on_delete} type="button" className="btn btn-danger"><i className="fa fa-trash-o fa-fw"></i> Xóa</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productGetIDs: state.productGetIDs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_delete_product: (id) => {
      dispatch(get_id_products(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDelete)
