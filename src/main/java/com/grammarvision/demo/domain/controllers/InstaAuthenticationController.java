package com.grammarvision.demo.domain.controllers;

import org.jinstagram.auth.InstagramAuthService;
import org.jinstagram.auth.model.Token;
import org.jinstagram.auth.model.Verifier;
import org.jinstagram.auth.oauth.InstagramService;
import org.jinstagram.exceptions.InstagramException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class InstaAuthenticationController {

  private InstagramService instagramService = new InstagramAuthService()
    .apiKey("")
    .apiSecret("")
    .scope("basic+public_content")
    .callback("http://localhost:8080/api/callback")
    .build();

  @RequestMapping(method = RequestMethod.GET, value = "/authentication")
  public String query(HttpServletResponse response) throws IOException {
    return instagramService.getAuthorizationUrl();
  }

  @RequestMapping(method = RequestMethod.GET, value = "/callback")
  public Token token(@RequestParam String code) throws InstagramException {
    Verifier verifier = new Verifier(code);
    Token token = instagramService.getAccessToken(verifier);
    return token;
  }
}
