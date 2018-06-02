package com.grammarvision.demo.domain.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api")
public class ApiController {

  private static final String template = "Hello, %s!";
  private final AtomicLong counter = new AtomicLong();

  @RequestMapping(method = RequestMethod.GET, value = "/greetings")
  public String greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
    return "Hello " + name;
  }
}
