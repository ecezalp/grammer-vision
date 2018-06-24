package com.grammarvision.demo.web;

import org.jinstagram.auth.model.Token;
import org.jinstagram.auth.model.Verifier;
import org.jinstagram.auth.oauth.InstagramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class InstaAuthenticationController {

  @Autowired
  InstagramService instagramService;

  @RequestMapping(method = RequestMethod.GET, value = "/authentication")
  public String query() throws IOException {
    return instagramService.getAuthorizationUrl();
  }

  @RequestMapping(method = RequestMethod.GET, value = "/callback")
  public void token(@RequestParam String code, HttpServletResponse response, HttpSession session) throws IOException {
    Verifier verifier = new Verifier(code);
    Token token = instagramService.getAccessToken(verifier);
    session.setAttribute("grammar-vision", token.getToken());
    response.sendRedirect("http://localhost:8080/token?tokenString=" + token.getToken());
  }
}
