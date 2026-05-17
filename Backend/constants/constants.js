import cloudinary from "../utils/Cloudnary.js";
import coursesection from "../models/CourseSectionModel.js";

export const deleteVideoByUrlForCloudnary = async (videoUrl) => {
  //   const extractPublicId = (url) => {
  //       const parts = url.split('/');
  //       const publicIdWithExtension = parts[parts.length - 1];
  //       const publicId = publicIdWithExtension.split('.')[0];

  //       const folderPath = parts.slice(parts.indexOf('upload') + 1, parts.length - 1).join('/');
  //       return folderPath ? `${folderPath}/${publicId}` : publicId;
  //   };

  //   const publicId = extractPublicId(videoUrl);
  const urlObj = new URL(videoUrl);
  let path = urlObj.pathname.split("/upload/")[1];
  // remove version if present
  path = path.replace(/v[0-9]+\//, "");
  // remove extension
  path = path.replace(/\.[^/.]+$/, "");
  return path;
};

export const DeleteAllCourseVideosUsingDeleteCourseButton = async (
  sectionData,courseID
) => {
  const result = [];
  for (let i = 0; i < sectionData.length; i++) {
    const section = await coursesection.findById(sectionData[i]._id);
    for (let j = 0; j < sectionData[i].videos.length; j++) {
      if (sectionData[i].videos[j].public_id) {
        const resultStatus = await cloudinary.uploader
          .destroy(sectionData[i].videos[j].public_id, {
            resource_type: "video",
            invalidate: true,
          });
        section.videos = section.videos.filter(
          (video) => video.public_id != sectionData[i].videos[j].public_id        
        );
        result.push(resultStatus.result);
      }
      
    }
     await section.save();
  }
  await coursesection.deleteMany({courseId:courseID})
  return result;
};
