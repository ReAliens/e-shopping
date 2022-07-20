import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AppRoutes from './routes/appRoutes';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AppRoutes />
      </>
    );
  }
}

export default App;
