import React from 'react';
import axios from 'axios';

export default class DataRepository {

  getHashtagData(hashtag) {
    axios.get(`/api/hashtags?name=${hashtag.name}&pic_count=${hashtag.picCount}&tag_count=${hashtag.tagCount}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}