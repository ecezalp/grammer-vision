package com.grammarvision.demo.domain.service;

import com.google.gson.Gson;
import com.grammarvision.demo.domain.Picture;
import org.springframework.stereotype.Service;

@Service
public class PictureService {

  private Gson gson = new Gson();

  public Picture getPictureFromJson(String json) {
    return gson.fromJson(json, Picture.class);
  }
}
