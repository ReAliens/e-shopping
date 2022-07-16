import { Component, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

class AppRoutes extends Component {
  render() {
    return (
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    );
  }
}

export default AppRoutes;
