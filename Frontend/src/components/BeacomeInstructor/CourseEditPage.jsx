import SellerHeader from "./SellerHeader";
import { useState } from "react";
import axios from "axios";
import { mainURL } from "../../Constants/Constant";
import { Link, useParams } from "react-router";
import { useEffect } from "react";

export const CourseEditPage = () => {
  const [data, setData] = useState();
  const id = useParams();

  const getCourseData = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const res = await axios.post(`${mainURL}/course-full-page`, id, {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      });
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <div>
      <SellerHeader />
      <div className="h-screen p-3 gap-3 flex">
        <div className="w-1/2 border p-3">
          <h1>Videos</h1>
          {data?.videoCourseDetails[0] ? (
            ""
          ) : (
            <Link to={`/upload-course-videos/${id?.id}`}>Upload videos</Link>
          )}
        </div>
        <div className="w-1/2 text-center border  p-3">
          <h1>Course Information</h1>
          <input type="text" value={data?.courseDetails?.courseName} disabled />
          <input
            type="text"
            value={data?.courseDetails?.description}
            disabled
          />
          <input type="text" value={data?.courseDetails?.price} disabled />
        </div>
      </div>
    </div>
  );
};
export default CourseEditPage;
