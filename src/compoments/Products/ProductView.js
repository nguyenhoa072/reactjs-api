import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { get_product_request } from './../../store/actions/products';

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      content: "",
      status: false,
    };
  }

  componentDidMount() {
    var { match } = this.props
    if (match) {
      var id = match.params.id;
      if (id > 0) {
        this.props.on_get_product(id);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.productGet) {
      var { productGet } = nextProps
      this.setState({
        id: productGet.id,
        name: productGet.name,
        price: productGet.price,
        content: productGet.content,
        status: productGet.status
      });
    }
  }

  render() {
    var { name, price, content } = this.state
    return (
      <div>
        <h1>{name}</h1>
        <p>Price: <b className="text-danger">{price + '$'}</b></p>
        <div>
          {ReactHtmlParser(content)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productGet: state.productGet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_get_product: (id) => {
      dispatch(get_product_request(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)