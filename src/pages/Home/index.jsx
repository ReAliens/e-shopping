import { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoriesData } from '../../redux/actions/categories/categories';

class Home extends Component {
  componentDidMount() {
    this.props.getCategoriesData();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
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
