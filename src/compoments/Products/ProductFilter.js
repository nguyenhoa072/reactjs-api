import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter_product } from './../../store/actions/products';

class ProductFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
    }
  }

  onChange = (event) => {   
    const target = event.target;
    const value = target.value;
    const name = target.name;
    var title = name === 'title' ? value : this.state.title;
    this.props.on_filter_product(title);       
  }
  
  render() {
    return (
      <div className="col-3">
        <input name="title" onChange={this.onChange} type="text" className="form-control" placeholder="Tìm nhanh" />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_filter_product: (title) => {
      dispatch(filter_product(title))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductFilter)

