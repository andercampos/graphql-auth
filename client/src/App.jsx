import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './contexts/auth';
import { Routes } from './routes';

import './styles/styles.css';

const link = new createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
};

export { App };
