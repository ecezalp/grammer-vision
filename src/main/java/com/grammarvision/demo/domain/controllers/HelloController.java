package com.grammarvision.demo.domain.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
  @RequestMapping("/")
  public String index() {
    return "Welcome to Grammer Vision";
  }
}
