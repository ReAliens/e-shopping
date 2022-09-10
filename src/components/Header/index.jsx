import { Component } from 'react';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import currencyIcon from '../../images/currency.png';
import vector from '../../images/vector.png';
import './index.css';
import { NavLink } from 'react-router-dom';
import headerItems from '../../constants/headerItems';
import { getCategoriesData } from '../../redux/actions/categories/categories';
import { connect } from 'react-redux';
import CurrancyDropdown from '../CurrancyDropdown';
import { loadCurrencies } from '../../redux/actions/currencies/currencies';

class Header extends Component {
  state = {
    category: 'all',
    dropdownShow: false,
  };

  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    return (
      <div className="header-container">
        <nav className="nav-links">
          {headerItems.map((item) => (
            <NavLink
              key={item.id}
              to="/"
              onClick={() => {
                this.setState({ category: item.category });
                this.props.getCategoriesData(item.category);
              }}
              style={
                this.state.category === item.category
                  ? { color: '#5ECE7B', borderBottom: '2px solid #5ECE7B' }
                  : { color: '#1d1f22' }
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="cart-currency-container">
          <div
            className="icons-group"
            onClick={() =>
              this.setState({ dropdownShow: !this.state.dropdownShow })
            }
          >
            <img src={currencyIcon} alt="currency-converter" className="icon" />
            <img src={vector} alt="currency-converter" className="vector" />
          </div>
          {this.state.dropdownShow && (
            <CurrancyDropdown options={this?.props?.currencies?.data} />
          )}
          <div className="cart-container">
            <img src={cart} alt="cart" className="icon" />
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesData: (category) => dispatch(getCategoriesData(category)),
    getCurrencies: () => dispatch(loadCurrencies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
