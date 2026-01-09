export const ThumbnailMissing = (req, res, next) => {
  try {
    if (!req.file || !req.file.video) {
      return res.send("Data is missing!");
    } else {
      next();
    }
  } catch (e) {
    return res.send("Error", e);
  }
};
