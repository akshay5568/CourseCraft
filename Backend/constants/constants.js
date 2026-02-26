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