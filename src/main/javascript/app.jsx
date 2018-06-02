import React from 'react';
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function App() {

  const home = () => <h1>YOU ARE HOME</h1>;

  const test = () => <h1>THIS IS TEST</h1>;

  return <MuiThemeProvider>
    <BrowserRouter>
      <div className="blog-inner-container">
        <Route exact path="/" component={home}/>
        <Route path="/test" component={test}/>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>;
}

