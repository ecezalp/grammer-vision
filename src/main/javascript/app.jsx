import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter, Route} from "react-router-dom";

import "../styles/main.scss";

import LandingContainer from "./containers/landingContainer";

import Landing from "./components/landing";
import InstaRepository from "./components/instaRepository";
import * as qs from 'query-string';
import rootReducer from './reducers/index';

export default function App() {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  const landing = () => <LandingContainer/>;

  // const landing = (props) => <Landing
  //   dataRepository={getDataRepoWithToken(qs.parse(props.location.search).tokenString)}/>;

  // const getDataRepoWithToken = (tokenString) => {
  //   window.localStorage.setItem("grammer_vision", tokenString);
  //   return new InstaRepository();
  // };

  return <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Route exact path="/" component={landing}/>
          <Route path="/token" component={landing}/>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>;
}

