package com.grammarvision.demo.domain.service;

import com.google.cloud.vision.v1.*;
import com.google.protobuf.ByteString;
import com.google.protobuf.Descriptors;
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

@Service
public class LoadingService {

  private ImageAnnotatorClient vision;

  {
    try {
      vision = ImageAnnotatorClient.create();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public HashMap<String, String> getAnnotations (AnnotateImageResponse response){
    HashMap<String, String> annotations = new HashMap<>();
    for (EntityAnnotation annotation : response.getLabelAnnotationsList()) {
      for (Map.Entry<Descriptors.FieldDescriptor, Object> entry : annotation.getAllFields().entrySet()) {
        System.out.printf("%s : %s\n", entry.getKey(), entry.getValue());
        annotations.put(entry.getKey().toString(), entry.getValue().toString());
      }
    }
    return annotations;
  }

  public void printErrors(List<AnnotateImageResponse> responses){
    for (AnnotateImageResponse res : responses) {
      if (res.hasError()) {
        System.out.printf("Error: %s\n", res.getError().getMessage());
        return;
      }
    }
  }

  public List<AnnotateImageResponse> getImageResponseFromBytes(byte[] bytes) {
    ByteString imgBytes = ByteString.copyFrom(bytes);
    List<AnnotateImageRequest> request = getImageRequestFromString(imgBytes);
    BatchAnnotateImagesResponse response = vision.batchAnnotateImages(request);
    List<AnnotateImageResponse> responses = response.getResponsesList();
    return responses;
  }

  private List<AnnotateImageRequest> getImageRequestFromString(ByteString byteString) {
    List<AnnotateImageRequest> requests = new ArrayList<>();
    Image img = Image.newBuilder().setContent(byteString).build();
    Feature feat = Feature.newBuilder().setType(Feature.Type.LABEL_DETECTION).build();
    AnnotateImageRequest request = AnnotateImageRequest.newBuilder()
      .addFeatures(feat)
      .setImage(img)
      .build();
    requests.add(request);
    return requests;
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

