import { Component, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Clothes from '../pages/Categories';
import Home from '../pages/Home';
import Techs from '../pages/Techs';
import routes from './routes';

class AppRoutes extends Component {
  render() {
    return (
      <Suspense>
        <Routes>
          <Route path={routes.clothes.index()} element={<Clothes />} />
          <Route path={routes.techs.index()} element={<Techs />} />
          <Route path={routes.home.index()} element={<Home />} />
        </Routes>
      </Suspense>
    );
  }
}

export default AppRoutes;
