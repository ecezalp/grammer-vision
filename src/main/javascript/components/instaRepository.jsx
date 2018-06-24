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

  getHashtagData(hashTag) {
    let item = window.localStorage.getItem("grammer_vision");
    if (!this.isItemDefined(item)) return this.authenticate();
    return this.getPicUrlsFromInsta(item, this.uploadToBucket);
  }

  getPicUrlsFromInsta(item, callback) {
    axios.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${item}`)
      .then(function (response) {
        let pictures = response.data.data.map(entry => Object.assign({}, {pictureId: entry.id}, {pictureUrl: entry.images.standard_resolution.url}));
        return callback(pictures);
      })
      .catch(function (error) {
        window.localStorage.setItem("grammer_vision", "");
        return [];
      });
  }

  isItemDefined(item) {
    return !(item === "" || item === null || item === "undefined" || typeof item === "undefined" || item === undefined);
  }

  uploadToBucket(pictures) {
    console.log(JSON.stringify(pictures));
    return axios.post(`/api/pictures`, JSON.stringify(pictures), {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(function (response) {
        debugger;
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}