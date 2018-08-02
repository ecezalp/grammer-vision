export const processPictures = rawPictures =>
  rawPictures.data.map(entry => ({
    id: entry.id,
    location: entry.location ? entry.location.name : '',
    url: entry.images.standard_resolution.url,
    user: entry.user ? entry.user.username : '',
    tags: [],
  }));