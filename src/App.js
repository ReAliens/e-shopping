import { ApolloProvider } from '@apollo/client';
import { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import store from './redux/store';
import AppRoutes from './routes/appRoutes';
import { client } from './services/apollo';
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Header />
          <AppRoutes />
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
