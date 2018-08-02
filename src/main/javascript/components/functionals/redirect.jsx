import React from 'react';
import {cleanStateOnLocalStorage, readStateOnLocalStorage} from "../../actions/windowActions";

export default function Redirect({getPictureDataFromInstagram, history, setStateFromLocalStorage, token}) {

  const cleanAndNavigate = () => {
    cleanStateOnLocalStorage();
    history.push("/pictures");
  };

  setStateFromLocalStorage(token);
  getPictureDataFromInstagram(token, cleanAndNavigate);

  return null;
}