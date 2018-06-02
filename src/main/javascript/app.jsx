import React from 'react';
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter, Route} from "react-router-dom";
import Landing from "./components/landing";
import DataRepository from "./components/dataRepository";

export default function App() {

  const dataRepository = new DataRepository();

  const landing = () => <Landing dataRepository={dataRepository}/>;

  return <MuiThemeProvider>
    <BrowserRouter>
      <div className="app-container">
        <Route exact path="/" component={landing}/>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>;
}

