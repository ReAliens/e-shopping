import { Component, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import routes from './routes';

class AppRoutes extends Component {
  render() {
    return (
      <Suspense>
        <Routes>
          <Route path={routes.home.index()} element={<Home />} />
        </Routes>
      </Suspense>
    );
  }
}

export default AppRoutes;
