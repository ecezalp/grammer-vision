package com.grammarvision.demo.web;

import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.grammarvision.demo.domain.Picture;
import com.grammarvision.demo.domain.TagResponse;
import com.grammarvision.demo.domain.service.LoadingService;
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

  @Autowired
  LoadingService loadingService;

  @RequestMapping(method = RequestMethod.POST, value = "/tags")
  public List<TagResponse> findPic(@RequestBody String pictureJson) throws Exception {
    Picture picture = pictureService.getPictureFromJson(pictureJson);
    return loadingService.getPictureWithAnnotations(picture);
  }
}