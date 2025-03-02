import React from 'react';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'; 
import { applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './_reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider
    store={createStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/