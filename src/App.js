import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AppRoutes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    );
  }
}

export default App;
