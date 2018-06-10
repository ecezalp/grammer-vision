//package com.grammarvision.demo.domain.service;
//
//import org.jinstagram.Instagram;
//import org.jinstagram.auth.InstagramAuthService;
//import org.jinstagram.auth.model.Token;
//import org.jinstagram.auth.model.Verifier;
//import org.jinstagram.auth.oauth.InstagramService;
//import org.springframework.stereotype.Service;
//
//import java.io.IOException;
//import java.util.Scanner;
//
//
//@Service
//public class GramService {
//
//  private InstagramService instantiateService(){
//    return new InstagramAuthService()
//      .apiKey("ee271e5b982f4e9385e400f67095e15a")
//      .apiSecret("f79e95af6ec6440bad64efe4ca639c52")
//      .callback("http://localhost:8080/api/callback")
//      .build();
//  }
//
//  private Token getToken(InstagramService service) throws IOException {
//    String authorizationUrl = service.getAuthorizationUrl();
//    Verifier verifier = new Verifier(authorizationUrl);
//    return service.getAccessToken(verifier);
//  }
//}
