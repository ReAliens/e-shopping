import { Component } from 'react';
import { connect } from 'react-redux';
import { getProductDetails } from '../../redux/actions/product/product';
import './index.css';

class ProductDetails extends Component {
  state = {
    src: '',
  };
  componentDidMount() {
    this.props.getProductDetails(window.location.pathname.split('/')[2]);
  }
  render() {
    return (
      <div className="product-page-container">
        <div className="image-groups-container">
          {this?.props?.product?.data?.gallery?.map((item, i) => (
            <img
              className="image-groups"
              src={item}
              alt="item-cover"
              key={i}
              onClick={() => this.setState({ src: item })}
            />
          ))}
        </div>
        <div className="data-container">
          <img
            className="image-cover"
            src={
              this.state.src
                ? this?.state?.src
                : this?.props?.product?.data?.gallery
            }
            alt="product-cover"
          />
          <div className="content-container">
            <div className="labels">
              <h4>{this?.props?.product?.data?.brand}</h4>
              <h5>{this?.props?.product?.data?.name}</h5>
            </div>
            {this?.props?.product?.data?.attributes?.length ? (
              <div className="attr-container">
                {this?.props?.product?.data?.attributes?.map((attr) =>
                  console.log(attr),
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetails: (id) => dispatch(getProductDetails(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
