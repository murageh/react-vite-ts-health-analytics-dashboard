import App from './App.tsx'
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import React from 'react';
import ReactDOM from 'react-dom/client'

const client = new ApolloClient({
        uri: 'http://localhost:4000/', // Replace with your GraphQL API URL
        cache: new InMemoryCache()
    });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
)
