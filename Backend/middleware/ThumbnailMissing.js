export const ThumbnailMissing = (req, res, next) => {
  try {
    if (!req.file) {
      return res.send("Course Thumbnail is mandetory");
    } else {
      next();
    }
  } catch (e) {
    return res.send("Error", e);
  }
};
