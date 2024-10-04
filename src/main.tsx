import App from './App.tsx'
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import React from 'react';
import ReactDOM from 'react-dom/client'

// React Toastify
import 'react-toastify/dist/ReactToastify.css';

// Use .env values for endpoint
const endpointURL = import.meta.env.VITE_APP_GRAPHQL_URL || 'http://localhost:4000/';

const client = new ApolloClient({

    uri: endpointURL, // You can replace this with your GraphQL API URL
        cache: new InMemoryCache()
    });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
)
