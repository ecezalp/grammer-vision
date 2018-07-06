package com.grammarvision.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomeController {

  @RequestMapping(value ={"/", "/token", "/pictures"})
  public String index() {
    return "index.html";
  }
}