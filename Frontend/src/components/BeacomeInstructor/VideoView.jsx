import React from 'react'

export const VideoView = ({courseVideos}) => {
  return (
     <div className="overflow-scroll">
          {courseVideos[0]?.videos?.map((video) => {
            return (
              <div className="mt-3 w-87 rounded-md overflow-scroll">
                <video src={video} className="rounded-md w-full h-50" controls></video>
              </div>
            );
          })}
    </div>
  )
}

export default VideoView;
