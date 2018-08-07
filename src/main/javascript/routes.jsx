import React from 'react';
import {Route} from "react-router-dom";
import * as qs from 'query-string';

import Navbar from './components/presentationals/elements/navbar';

import RedirectContainer from "./components/containers/redirectContainer";
import PicturesContainer from "./components/containers/picturesContainer";
import LandingContainer from "./components/containers/landingContainer";

import withWelcome from "./components/higherorders/withWelcome";
import withRegistration from "./components/higherorders/withRegistration";

export default function Routes() {

  const landing = () => withWelcome(LandingContainer);

  const register = () => withRegistration(LandingContainer);

  const redirect = ({history, location}) =>
    <RedirectContainer history={history}
                       token={qs.parse(location.search).tokenString}/>;

  const pictures = () => <PicturesContainer/>;

  return <div className="app-container">
    <Navbar/>
    <Route exact path="/" component={landing}/>
    <Route path="/token" component={redirect}/>
    <Route path="/pictures" component={pictures}/>
    <Route path="/register" component={register}/>
  </div>;
}

