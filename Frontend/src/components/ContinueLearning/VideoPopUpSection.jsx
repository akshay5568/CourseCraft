import React from 'react'

export const VideoPopUpSection = ({courseVideos}) => {
    console.log(courseVideos);
  return (
    <div className='w-full border border-gray-300 rounded-md p-2'>
         {courseVideos.map(video => (
             <video src={video} muted controls></video>
         ))}
    </div>
  )
}

export default VideoPopUpSection;