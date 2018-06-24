package com.grammarvision.demo.domain.service;

import com.google.gson.Gson;
import com.grammarvision.demo.domain.Picture;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URL;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class PictureService {

  private Gson gson = new Gson();

  public List<Picture> getPicturesFromJson(String json) {
    try {
      Picture[] pictures = gson.fromJson(json, Picture[].class);
      return Arrays.asList(pictures);
    } catch (Exception e) {
      e.printStackTrace();
    }
    return Collections.emptyList();
  }

  public boolean uploadPictures(List<Picture> pictures) throws IOException {
    getPictureFromUrl(pictures.get(0).getPictureUrl());
    return true;
  }

  public BufferedImage getPictureFromUrl(String urlString) throws IOException {
    BufferedImage img = ImageIO.read(new URL(urlString));
    return img;
  }
}
