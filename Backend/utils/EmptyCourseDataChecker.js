export const courseDataChecker = (updatedCourseDetailsFromFrontend) => {
  if (
    updatedCourseDetailsFromFrontend.courseName == "" ||
    updatedCourseDetailsFromFrontend.courseId.id == undefined ||
    updatedCourseDetailsFromFrontend.description == "" ||
    updatedCourseDetailsFromFrontend.price == null
  ) {
    return false;
  }
  return true;
};
