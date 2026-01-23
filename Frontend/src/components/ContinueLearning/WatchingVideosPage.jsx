import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const WatchingVideosPage = () => {
  const usersCourses = useSelector((state) => state?.User.courses || []);
  const { id } = useParams();
  const filteredCourse = usersCourses.filter((course) => course._id == id);
  return (
    <div>
      <Header />
      <div className="flex h-screen p-2 gap-2">
        <div className="bg-gray-200 w-1/2 rounded-md p-3">
          <h1 className="text-2xl font-extrabold">Videos</h1>
          <div className="w-ful">
            {filteredCourse[0]?.courseID?.videoDBId?.videos.map(
              (video, index) => (
                <video
                  controls
                  key={index}
                  src={video}
                  className="mt-3 rounded-md"
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                />
              )
            )}
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="p-3">
            <h1 className="">{filteredCourse[0]?.courseID?.courseName}</h1>
            <h3 className="mt-4">{filteredCourse[0]?.courseID?.description}</h3>
            <h3 className="mt-4">
              Students Enrolled :{" "}
              {filteredCourse[0]?.courseID?.enrolledStudents.length}
            </h3>
            <h3>Order ID: {filteredCourse[0]?.razorpay_order_id}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WatchingVideosPage;
