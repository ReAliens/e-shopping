import { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductsCard';
import { getCategoriesData } from '../../redux/actions/categories/categories';
import './index.css';

class Home extends Component {
  componentDidMount() {
    this.props.getCategoriesData();
  }

  render() {
    const categoryList = this.props.categories.listReducer.data;
    console.log(categoryList);
    return (
      <div className='page-container'>
        <h2>{categoryList?.name?.replace(/./, (c) => c.toUpperCase())}</h2>
        <div className="container">
          {categoryList?.products?.map((item) => (
            <ProductCard
              key={item?.id}
              image={item?.gallery[0]}
              name={item?.name}
              price={item?.prices[0]?.amount}
              stock={item?.inStock}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesData: () => dispatch(getCategoriesData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
