package com.grammarvision.demo.domain.controllers;

import com.grammarvision.demo.domain.service.GramService;
import org.jinstagram.Instagram;
import org.jinstagram.entity.users.feed.MediaFeed;
import org.jinstagram.exceptions.InstagramException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api")
public class ApiController {

  @Autowired
  GramService gramService;

  private Instagram getInstagram() throws IOException {
    return gramService.initializeInsta();
  }

  @RequestMapping(method = RequestMethod.GET, value = "/hashtags")
  public String query(@RequestParam(value = "name") String name,
                      @RequestParam(value = "pic_count") String picCount,
                      @RequestParam(value = "tag_count") String tagCount) throws IOException {

    Instagram instagram = getInstagram();

    System.out.println();

    return "Hello " + name + "your count is " + picCount + "and your tag count is " + tagCount;
  }

  @RequestMapping(method = RequestMethod.GET, value = "/callback")
  public String getCode(@RequestParam String code){
    System.out.println("AAAAAAAAA_______" + code );
    return code;
  }
}
