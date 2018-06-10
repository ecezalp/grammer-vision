import React from 'react';
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter, Route} from "react-router-dom";
import Landing from "./components/landing";
import InstaRepository from "./components/instaRepository";
import * as qs from 'query-string';

export default function App() {

  const landing = (props) => <Landing
    dataRepository={getDataRepoWithToken(qs.parse(props.location.search).tokenString)}/>;

  const getDataRepoWithToken = (tokenString) => {
    window.localStorage.setItem("grammer_vision", tokenString);
    return new InstaRepository();
  };

  return <MuiThemeProvider>
    <BrowserRouter>
      <div className="app-container">
        <Route exact path="/" component={landing}/>
        <Route path="/token" component={landing}/>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>;
}

