import React from 'react';
import axios from 'axios';

export default class InstaRepository {

  authenticate() {
    return axios.get(`/api/authentication`)
      .then(function (response) {
        window.location.href = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getHashtagData(hashtag) {
    debugger;
    let item = window.localStorage.getItem("grammer_vision");
    if (item === null || item === "undefined" || typeof item === "undefined" || item === undefined) return this.authenticate();
    axios.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${item}`)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}