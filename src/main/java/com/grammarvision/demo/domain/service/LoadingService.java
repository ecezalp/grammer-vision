package com.grammarvision.demo.domain.service;

import com.google.cloud.vision.v1.ImageAnnotatorClient;
import com.google.cloud.vision.v1.AnnotateImageRequest;
import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.BatchAnnotateImagesResponse;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.google.cloud.vision.v1.Feature;
import com.google.cloud.vision.v1.Image;
import com.google.protobuf.ByteString;
import com.google.protobuf.Descriptors;
import com.grammarvision.demo.domain.Picture;
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


  public List<HashMap<String, String>> getAllAnnotations(List<Picture> pictures) {
    List<byte[]> bytes = pictures.stream().map(picture -> getBytesFromUrl(picture.getPictureUrl())).collect(toList());
    List<BatchAnnotateImagesResponse> responses = bytes.stream().map(this::getImageResponseFromBytes).collect(toList());
    return singletonList(getAnnotations(responses.get(0).getResponses(0)));
  }

  public HashMap<String, String> getAnnotations(AnnotateImageResponse response) {
    HashMap<String, String> annotations = new HashMap<>();
    for (EntityAnnotation annotation : response.getLabelAnnotationsList()) {
      for (Map.Entry<Descriptors.FieldDescriptor, Object> entry : annotation.getAllFields().entrySet()) {
        System.out.printf("%s : %s\n", entry.getKey(), entry.getValue());
        annotations.put(entry.getKey().toString(), entry.getValue().toString());
      }
    }
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

  public BatchAnnotateImagesResponse getImageResponseFromBytes(byte[] bytes) {

    ImageAnnotatorClient vision = null;

    try {
      vision = ImageAnnotatorClient.create();
    } catch (IOException e) {
      e.printStackTrace();
    }

    ByteString imgBytes = ByteString.copyFrom(bytes);
    List<AnnotateImageRequest> request = getImageRequestFromString(imgBytes);
    return vision.batchAnnotateImages(request);
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

