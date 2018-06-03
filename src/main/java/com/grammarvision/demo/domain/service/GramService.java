package com.grammarvision.demo.domain.service;

import org.jinstagram.Instagram;
import org.jinstagram.auth.InstagramAuthService;
import org.jinstagram.auth.model.Token;
import org.jinstagram.auth.model.Verifier;
import org.jinstagram.auth.oauth.InstagramService;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Scanner;


@Service
public class GramService {

  public Instagram initializeInsta() throws IOException {
    InstagramService service = instantiateService();

    System.out.println("SERVICE OK");
    Token token = getToken(service);
    System.out.println("TOKEN OK");
    Instagram insta = new Instagram(token);
    insta.setAccessToken(token);
    return insta;
  }

  private InstagramService instantiateService(){
    return new InstagramAuthService()
      .apiKey("")
      .apiSecret("")
      .callback("http://localhost:8080/api/callback")
      .scope("basic public_content")
      .build();
  }



  private Token getToken(InstagramService service) throws IOException {
    String authorizationUrl = service.getAuthorizationUrl();
    System.out.println(authorizationUrl);
    Verifier verifier = new Verifier(authorizationUrl);
    System.out.println(verifier);
    return service.getAccessToken(verifier);
  }
}
