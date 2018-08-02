import React from 'react';
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../../actions/windowActions";

export default function Redirect({getPictureDataFromInstagram, history, setStateFromLocalStorage, token, isGoingHome}) {

  const cleanAndNavigate = () => {
    cleanStateOnLocalStorage();
    isGoingHome ? history.push("/") : history.push("/pictures");
  };

  setStateFromLocalStorage(token);
  getPictureDataFromInstagram(token, cleanAndNavigate);

  return null;
}