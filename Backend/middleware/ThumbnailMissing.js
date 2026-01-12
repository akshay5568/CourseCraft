export const ThumbnailMissing = (req, res, next) => {
  try {
    if (!req.file) {
      return res.send("Data is missing!");
    } else {
      next();
    }
  } catch (e) {
    return res.send("Error", e);
  }
};
