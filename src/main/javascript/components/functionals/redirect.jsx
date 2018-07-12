import React from 'react';
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../../actions/windowActions";

export default function Redirect({getPictureUrls, history, setStateFromLocalStorage, token}) {

  const cleanAndNavigate = () => {
    cleanStateOnLocalStorage();
    history.push("/pictures");
  };

  setStateFromLocalStorage(token);
  getPictureUrls(token, cleanAndNavigate);

  return null;
}