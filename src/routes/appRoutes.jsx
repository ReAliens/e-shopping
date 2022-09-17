import { Component, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../pages/productDetails';
import routes from './routes';

class AppRoutes extends Component {
  render() {
    return (
      <Suspense>
        <Routes>
          <Route path={routes.home.index()} element={<Home />} />
          <Route
            path={routes.productDetail.index()}
            element={<ProductDetails />}
          />
        </Routes>
      </Suspense>
    );
  }
}

export default AppRoutes;
