import { Component } from 'react';
import { connect } from 'react-redux';
import cartCircle from '../../images/cartCircle.png';
import './index.css';

class ProductCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="image-container">
          <img alt="product" className="product-image" src={this.props.image} />
          <img src={cartCircle} alt="cart-Icon" className="cart-circle" />
          {this?.props?.stock && <p>OUT OF STOCK</p>}
        </div>
        <h5 className="product-title">{this.props.name}</h5>
        <div>
          <span>{this.props.currencies.defaultCurrency.symbol}</span>
          <span>
            {
              this?.props?.prices?.find(
                (price) =>
                  price?.currency?.label ===
                  this?.props?.currencies?.defaultCurrency?.label,
              )?.amount
            }
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state?.currencies,
  };
};

export default connect(mapStateToProps, null)(ProductCard);
