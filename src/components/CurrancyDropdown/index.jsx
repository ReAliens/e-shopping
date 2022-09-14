import { Component } from 'react';
import { connect } from 'react-redux';
import { changeCurrency } from '../../redux/actions/currencies/currencies';
import './index.css';

class CurrancyDropdown extends Component {
  render() {
    return (
      <div className="dropdown-container">
        {this?.props?.currencies?.data?.map((option, index) => (
          <div
            className="row-container"
            key={index}
            onClick={() => {
              this.props.changeCurrency(option);
              this.props.toggle();
            }}
          >
            <span>{option?.symbol}</span>
            <span>{option?.label}</span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state?.currencies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (currency) => dispatch(changeCurrency(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrancyDropdown);
