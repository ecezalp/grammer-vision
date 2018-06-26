package com.grammarvision.demo.domain.service;

import com.google.cloud.vision.v1.AnnotateFileResponse;
import com.google.cloud.vision.v1.AnnotateFileResponse.Builder;
import com.google.cloud.vision.v1.AnnotateImageRequest;
import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.AsyncAnnotateFileRequest;
import com.google.cloud.vision.v1.AsyncAnnotateFileResponse;
import com.google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse;
import com.google.cloud.vision.v1.BatchAnnotateImagesResponse;
import com.google.cloud.vision.v1.Block;
import com.google.cloud.vision.v1.ColorInfo;
import com.google.cloud.vision.v1.CropHint;
import com.google.cloud.vision.v1.CropHintsAnnotation;
import com.google.cloud.vision.v1.DominantColorsAnnotation;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.google.cloud.vision.v1.FaceAnnotation;
import com.google.cloud.vision.v1.Feature;
import com.google.cloud.vision.v1.Feature.Type;
import com.google.cloud.vision.v1.GcsDestination;
import com.google.cloud.vision.v1.GcsSource;
import com.google.cloud.vision.v1.Image;
import com.google.cloud.vision.v1.ImageAnnotatorClient;
import com.google.cloud.vision.v1.ImageContext;
import com.google.cloud.vision.v1.ImageSource;
import com.google.cloud.vision.v1.InputConfig;
import com.google.cloud.vision.v1.LocationInfo;
import com.google.cloud.vision.v1.OperationMetadata;
import com.google.cloud.vision.v1.OutputConfig;
import com.google.cloud.vision.v1.Page;
import com.google.cloud.vision.v1.Paragraph;
import com.google.cloud.vision.v1.SafeSearchAnnotation;
import com.google.cloud.vision.v1.Symbol;
import com.google.cloud.vision.v1.TextAnnotation;
import com.google.cloud.vision.v1.WebDetection;
import com.google.cloud.vision.v1.WebDetection.WebEntity;
import com.google.cloud.vision.v1.WebDetection.WebImage;
import com.google.cloud.vision.v1.WebDetection.WebLabel;
import com.google.cloud.vision.v1.WebDetection.WebPage;
import com.google.cloud.vision.v1.WebDetectionParams;
import com.google.cloud.vision.v1.Word;
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


  public List<HashMap<String, String>> getAllAnnotations(List<Picture> pictures) throws IOException {

    final ImageAnnotatorClient vision = ImageAnnotatorClient.create();

    List<byte[]> bytes = pictures.stream().map(picture -> getBytesFromUrl(picture.getPictureUrl())).collect(toList());
    List<BatchAnnotateImagesResponse> responses = bytes.stream().map(imgBytes -> getImageResponseFromBytes(vision, imgBytes)).collect(toList());
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

