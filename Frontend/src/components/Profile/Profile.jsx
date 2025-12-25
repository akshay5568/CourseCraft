import { useParams } from "react-router";
import Header from "../Header/Header";

export const Profile = () => {
  return (
    <div>
      <Header />
      <div className="ml-20 mr-20 flex mt-5">
         <div className="w-60 border"></div>
         <div className="w-full border">
            <div className="text-center text-[#2a2b40]">
              <span className="text-xl font-medium">Public Profile</span><br />
              <span className="font-light">Add info about yourself</span>
              </div>
         </div>
      </div>
    </div>
  );
};

export default Profile;
