import SellerHeader from "./SellerHeader";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import useGetCourseData from "../../Hooks/ForSeller/useGetCourseData";
import VideoView from "./videoView";
import VideoUploadBTN from "./VideoUploadBTN";

export const UploadVideos = () => {
  const {id} = useParams();
  useGetCourseData();
  const courseVideos = useSelector((state) => state?.CourseVideo?.videos);
  return (
    <div>
      <SellerHeader />
      <div className="flex p-3 justify-around">
        <VideoView courseVideos={courseVideos} />
        <VideoUploadBTN id={id}/>
      </div>
    </div>
  );
};

export default UploadVideos;
