package com.grammarvision.demo.web;

import com.grammarvision.demo.domain.Picture;
import com.grammarvision.demo.domain.service.PictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PicturesController {

  @Autowired
  PictureService pictureService;

  @RequestMapping(method = RequestMethod.POST, value = "/pictures")
  public List<byte[]> findPic(@RequestBody String picturesJson) throws Exception {
    List<Picture> pictures = pictureService.getPicturesFromJson(picturesJson);
    return pictureService.downloadPictures(pictures);
  }
}