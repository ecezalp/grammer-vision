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
      .apiKey(System.getenv("INSTA_API_KEY"))
      .apiSecret(System.getenv("INSTA_API_SECRET"))
      .scope("basic+public_content")
      .callback(System.getenv("VISION_BASE_URL") + "/api/callback")
      .build();
  }
}