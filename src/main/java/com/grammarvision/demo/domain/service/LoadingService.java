package com.grammarvision.demo.domain.service;

import com.google.cloud.vision.v1.AnnotateImageRequest;
import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.BatchAnnotateImagesResponse;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.google.cloud.vision.v1.Feature;
import com.google.cloud.vision.v1.Image;
import com.google.cloud.vision.v1.ImageAnnotatorClient;
import com.google.protobuf.ByteString;
import com.google.protobuf.Descriptors;
import com.grammarvision.demo.domain.Picture;
import com.grammarvision.demo.domain.TagResponse;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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


  public List<TagResponse> getAnnotations(List<AnnotateImageResponse> responses) {
    List<List<EntityAnnotation>> test = responses.stream().map(response -> response.getLabelAnnotationsList()).collect(toList());
    List<TagResponse> tagList = new ArrayList<>();

    for (List<EntityAnnotation> annotations : test) {
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

  public HashMap<String, String> getSingleAnnotation(AnnotateImageResponse response) {
    HashMap<String, String> annotations = new HashMap<>();
    for (EntityAnnotation annotation : response.getLabelAnnotationsList()) {
      for (Map.Entry<Descriptors.FieldDescriptor, Object> entry : annotation.getAllFields().entrySet()) {
        System.out.printf("%s : %s\n", entry.getKey(), entry.getValue());
        annotations.put(entry.getKey().toString(), entry.getValue().toString());
      }
    }

    System.out.println("3333333333333333333");
    System.out.println(annotations);
    System.out.println("3333333333333333333");
    return annotations;
  }

  public void printErrors(List<AnnotateImageResponse> responses) {
    for (AnnotateImageResponse res : responses) {
      if (res.hasError()) {
        System.out.printf("Error: %s\n", res.getError().getMessage());
        return;
      }
    }
  }

  public BatchAnnotateImagesResponse getImageResponseFromBytes(ImageAnnotatorClient vision, byte[] bytes) {

    ByteString imgBytes = ByteString.copyFrom(bytes);
    AnnotateImageRequest request = getImageRequestFromString(imgBytes);
    BatchAnnotateImagesResponse response = null;
    try {
      response = vision.batchAnnotateImages(singletonList(request));
    } catch (Exception e) {
      System.out.println("####################");
      System.out.println(e.getMessage());
      System.out.println("####################");
    }
    return response;
  }

  private AnnotateImageRequest getImageRequestFromString(ByteString byteString) {
    Image img = Image.newBuilder().setContent(byteString).build();
    Feature feat = Feature.newBuilder().setType(Feature.Type.LABEL_DETECTION).build();
    AnnotateImageRequest request = AnnotateImageRequest.newBuilder()
      .addFeatures(feat)
      .setImage(img)
      .build();
    return request;
  }

  public byte[] getBytesFromUrl(String urlString) {
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

