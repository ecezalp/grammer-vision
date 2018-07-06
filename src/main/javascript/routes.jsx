import React from 'react';
import {Route} from "react-router-dom";
import * as qs from 'query-string';

import LandingContainer from "./components/containers/landingContainer";
import RedirectContainer from "./components/containers/redirectContainer";
import PicturesContainer from "./components/containers/picturesContainer";

export default function Routes() {

  const landing = () =>
    <LandingContainer/>;

  const redirect = ({history, location}) =>
    <RedirectContainer history={history}
                       token={qs.parse(location.search).tokenString}/>;

  const pictures = () =>
    <PicturesContainer/>;

  return <div className="app-container">
    <Route exact path="/" component={landing}/>
    <Route path="/token" component={redirect}/>
    <Route path="/pictures" component={pictures}/>
  </div>;
}

