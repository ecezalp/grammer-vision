export const processPictures = rawPictures =>
  rawPictures.data.map(entry => Object.assign({}, {
    id: entry.id,
    url: entry.images.standard_resolution.url,
    tags: [],
  }));