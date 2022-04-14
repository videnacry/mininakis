import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { queryQuery } from './query';
import {
  RelayEnvironmentProvider,
  loadQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './relayEnvironment';

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, queryQuery, {
  pFirst:20
});

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense fallback="Loading...">
        <App preloadedQuery={preloadedQuery}/>
      </React.Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
