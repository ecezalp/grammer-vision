import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter, Route} from "react-router-dom";

import "../styles/main.scss";

import LandingContainer from "./containers/landingContainer";
import rootReducer from './reducers/index';
import ReduxRedirect from "./components/reduxRedirect";

export default function App() {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  const landing = () => <LandingContainer/>;

  const redirect = ({history}) => <ReduxRedirect history={history}/>;

  return <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Route exact path="/" component={landing}/>
          <Route path="/token" component={redirect}/>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>;
}

