import React from 'react';
import ReactDOM from 'react-dom';
import App from './Compontents/App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./modules";
import "firebase";

const store=createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);
