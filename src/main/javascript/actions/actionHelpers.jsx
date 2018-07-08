export const processPictures = rawPictures =>
  rawPictures.data.map(entry => Object.assign({}, {
    id: entry.id,
    url: entry.images.standard_resolution.url,
    tags: [],
  }));

export const processTags = rawTags => {
  return rawTags["google.cloud.vision.v1.EntityAnnotation.description"];
};