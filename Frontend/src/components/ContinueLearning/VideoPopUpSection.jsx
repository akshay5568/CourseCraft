import React from 'react'
import { Link } from 'react-router';

export const VideoPopUpSection = ({courseVideos}) => {
    console.log(courseVideos);
  return (
    <div className='w-full border border-gray-300 rounded-md p-2'>
         {courseVideos.map(video => (
            //  <video src={video.videoUrl} muted controls></video>
            <Link className=''>{video.videoName}</Link>
         ))}
    </div>
  )
}

export default VideoPopUpSection;