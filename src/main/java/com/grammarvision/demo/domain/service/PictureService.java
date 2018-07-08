package com.grammarvision.demo.domain.service;

import com.google.gson.Gson;
import com.grammarvision.demo.domain.Picture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URL;
import java.util.Arrays;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class PictureService {

  @Autowired
  LoadingService loadingService;

  private Gson gson = new Gson();

  public Picture getPictureFromJson(String json) {
    return gson.fromJson(json, Picture.class);
  }

//  public List<Picture> getPicturesFromJson(String json) {
//    Picture[] pictures = gson.fromJson(json, Picture[].class);
//    return Arrays.asList(pictures);
//  }
//
//  public List<byte[]> downloadPictures(List<Picture> pictures) throws Exception {
//   return pictures.stream().map(picture -> loadingService.getBytesFromUrl(picture.getPictureUrl())).collect(toList());
//  }
//
//  public BufferedImage getPictureFromUrl(String urlString) throws IOException {
//    BufferedImage img = ImageIO.read(new URL(urlString));
//    return img;
//  }
}
