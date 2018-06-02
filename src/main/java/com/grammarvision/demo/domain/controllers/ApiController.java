package com.grammarvision.demo.domain.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api")
public class ApiController {

  @RequestMapping(method = RequestMethod.GET, value = "/hashtags")
  public String query(@RequestParam(value = "name") String name,
                         @RequestParam(value = "pic_count") String picCount,
                         @RequestParam(value = "tag_count") String tagCount) {
    return "Hello " + name + "your count is " + picCount + "and your tag count is " + tagCount;
  }
}
