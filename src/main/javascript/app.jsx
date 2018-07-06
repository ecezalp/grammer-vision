import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter} from "react-router-dom";

import Routes from "./routes";

import "../styles/main.scss";

import rootReducer from './reducers/index';

export default function App() {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>;
}

