import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import {
  add_product_request,
  get_product_request,
  update_product_request
} from "./../../store/actions/products";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      price: "",
      content: "",
      status: false
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      if (id > 0) {
        this.props.on_get_product(id);
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.productGet) {
      var { productGet } = nextProps;
      this.setState({
        id: productGet.id,
        title: productGet.title,
        price: productGet.price,
        content: productGet.content,
        status: productGet.status
      });
    }
  }

  handleModelChange = content => {
    this.setState({
      content: content
    });
  };

  input_change = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  on_save = event => {
    event.preventDefault();
    var { id, title, price, status, content } = this.state;
    var { history } = this.props;
    var item = {
      id: id,
      title: title,
      price: price,
      content: content,
      status: status
    };
    if (id) {
      this.props.on_update_product(item);
    } else {
      this.props.on_add_product(item);
      console.log(item)
    }
    history.goBack();
  };

  render() {
    var { title, price, status, content } = this.state;

    return (
      <Fragment>
        <div className="card border-primary">
          <h5 className="card-header text-white bg-primary">
            {this.state.id ? "Sửa sản phẩm" : "Thêm sản phẩm"}
          </h5>
          <div className="card-body">
            <form onSubmit={this.on_save}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Tên</label>
                  <input
                    onChange={this.input_change}
                    type="text"
                    value={title}
                    className="form-control"
                    name="title"
                    placeholder=""
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Giá</label>
                  <input
                    onChange={this.input_change}
                    type="text"
                    value={price}
                    className="form-control"
                    name="price"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Mô tả</label>
                <JoditEditor
                  name="content"
                  value={content}
                  tabIndex={1} // tabIndex of textarea
                  onChange={this.handleModelChange}
                />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    value={status}
                    onChange={this.input_change}
                    type="checkbox"
                    className="custom-control-input"
                    name="status"
                    id="status"
                    checked={status}
                  />
                  <label className="custom-control-label" htmlFor="status">
                    Kích hoạt
                  </label>
                </div>
                {/* <select value={status} onChange={this.input_change} name="status" className="custom-select">
                  <option value={false}>Ẩn</option>
                  <option value={true}>Kích hoạt</option>
                </select> */}
              </div>
              <div className="row">
                <div className="col-3 offset-6">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="btn btn-secondary btn-block"
                  >
                    Hủy
                  </button>
                </div>
                <div className="col-3">
                  <button type="submit" className="btn btn-primary btn-block">
                    Lưu lại
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productGet: state.productGet
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_add_product: item => {
      dispatch(add_product_request(item));
    },
    on_get_product: id => {
      dispatch(get_product_request(id));
    },
    on_update_product: item => {
      dispatch(update_product_request(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
