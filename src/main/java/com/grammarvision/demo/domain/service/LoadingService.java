package com.grammarvision.demo.domain.service;

import com.google.cloud.vision.v1.*;
import com.google.protobuf.ByteString;
import com.grammarvision.demo.domain.Picture;
import com.grammarvision.demo.domain.TagResponse;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import static java.util.Collections.singletonList;
import static java.util.stream.Collectors.toList;

@Service
public class LoadingService {

  public List<TagResponse> getPictureWithAnnotations(Picture taglessPicture) throws IOException {
    final ImageAnnotatorClient vision = ImageAnnotatorClient.create();
    byte[] bytes = getBytesFromUrl(taglessPicture.getUrl());
    BatchAnnotateImagesResponse response = getImageResponseFromBytes(vision, bytes);
    return getAnnotations(response.getResponsesList());
  }


  private List<TagResponse> getAnnotations(List<AnnotateImageResponse> responses) {
    List<List<EntityAnnotation>> labelsList = responses.stream().map(response -> response.getLabelAnnotationsList()).collect(toList());
    List<TagResponse> tagList = new ArrayList<>();
    for (List<EntityAnnotation> annotations : labelsList) {
      for (EntityAnnotation annotation : annotations) {
        TagResponse tagResponse = TagResponse.builder()
          .score(String.valueOf(annotation.getScore()))
          .name(annotation.getDescription())
          .build();
        tagList.add(tagResponse);
      }
    }
    return tagList;
  }

  private BatchAnnotateImagesResponse getImageResponseFromBytes(ImageAnnotatorClient vision, byte[] bytes) {
    ByteString imgBytes = ByteString.copyFrom(bytes);
    AnnotateImageRequest request = getImageRequestFromString(imgBytes);
    BatchAnnotateImagesResponse response = null;
    try {
      response = vision.batchAnnotateImages(singletonList(request));
    } catch (Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  private AnnotateImageRequest getImageRequestFromString(ByteString byteString) {
    Image img = Image.newBuilder().setContent(byteString).build();
    Feature feat = Feature.newBuilder().setType(Feature.Type.LABEL_DETECTION).build();
    return AnnotateImageRequest.newBuilder()
      .addFeatures(feat)
      .setImage(img)
      .build();
  }

  private byte[] getBytesFromUrl(String urlString) {
    URL url = null;
    try {
      url = new URL(urlString);
    } catch (MalformedURLException e) {
      e.printStackTrace();
    }
    ByteArrayOutputStream output = new ByteArrayOutputStream();
    try (InputStream inputStream = url.openStream()) {
      int n = 0;
      byte[] buffer = new byte[1024];
      while (-1 != (n = inputStream.read(buffer))) {
        output.write(buffer, 0, n);
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
    return output.toByteArray();
  }
}

