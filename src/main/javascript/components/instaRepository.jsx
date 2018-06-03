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
    if (!window.localStorage.getItem("insta_code") || window.localStorage.getItem("insta_code") === "") this.authenticate();
    axios.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${window.localStorage.getItem("insta_code")}`)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}