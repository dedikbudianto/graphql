import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Post from './layout/Post';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
    headers: {
      market:"ID"
    }
  }),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={Post} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
