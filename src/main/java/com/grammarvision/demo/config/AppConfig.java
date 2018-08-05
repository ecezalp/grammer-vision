package com.grammarvision.demo.config;


import org.jinstagram.auth.InstagramAuthService;
import org.jinstagram.auth.oauth.InstagramService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

  @Bean
  public InstagramService instagramService() {
    return new InstagramAuthService()
      .apiKey(System.getenv("insta_api_key"))
      .apiSecret(System.getenv("insta_api_secret"))
      .scope("basic+public_content")
      .callback(System.getenv("vision_base_url") + "/api/callback")
      .build();
  }
}