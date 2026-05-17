import { useSelector } from "react-redux";
import Header from "../Header/Header";
import AllCourses from "./AllCourses";
import PosterAnimated from "./PosterAnimated";   
import ProfileTag from "./ProfileTag";
import Recommended from "./Recommended";
import useGetAllCourses from "../../Hooks/useGetAllCourses";

const HomePage = () => {
  useGetAllCourses();
  const user = useSelector((state) => state.User);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">    
      <Header />

      <div
        className="
          w-full
          px-4
          sm:px-6
          md:px-10
          lg:px-16
          xl:px-20
          mt-5
          md:mt-10
        "
      >
        <div className="space-y-6 md:space-y-8">
          {user.data && user.courses.length > 0 && <ProfileTag />}
          <PosterAnimated />

          <Recommended />

          <AllCourses />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
