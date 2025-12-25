import Header from "../Header/Header";
import AllCourses from "./AllCourses";
import ForContuineLearning from "./ForContuineLearning";
import PosterAnimated from "./PosterAnimated";
import ProfileTag from "./ProfileTag";
import Recommended from "./Recommended";

const HomePage = () => {
  return (
    <div className="">
      {/* <h1>Hello This will be our Home page for CourseCraft.</h1> */}
      <Header />
      <div className="ml-20 mr-20 mt-10">
        <ProfileTag />
        <PosterAnimated/>
        {/* <ForContuineLearning/> */}
        <Recommended/>
        <AllCourses/>
      </div>
    </div>
  );
};

export default HomePage;
