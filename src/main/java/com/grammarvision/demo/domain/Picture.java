package com.grammarvision.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Picture {
  private String id;
  private String url;
  private String user;
  private String location;
  private List<String> tags;

  public static class PictureBuilder {
    private List<String> tags = new ArrayList<>();
  }
}
