import Header from "../Header/Header";
import { useSelector } from "react-redux";
import ProfileTag from "../HomePage/ProfileTag";
import useLogout from "../../Hooks/useLogout";

export const Profile = () => {
  const userData = useSelector((state) => state.User);
  const { logoutHandle } = useLogout();
  return (
    <div>
      <Header />
      <div className="ml-20 mr-20 flex mt-5">
        <div className="w-60 border border-gray-300 pt-20">
          <ProfileTag isProfile={true} />
          <div className="mt-10 text-center ">
            <button
              className="font-light cursor-pointer w-full hover:bg-gray-200 p-2"
              onClick={logoutHandle}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="w-full border border-gray-300">
          <div className="text-center border border-gray-300 text-[#2a2b40]">
            <span className="text-xl font-medium">Public Profile</span>
            <br />
            <span className="font-light">Add info about yourself</span>
          </div>

          <div className="">
            <div className="w-150  m-auto">
              <div className="w-full m-auto">
                <span className="font-semibold text-sm">Basic</span>
                <br />
                <div className="w-full mt-1">
                  <input
                    type="text"
                    className="border border-gray-400 rounded-md w-full p-2 cursor-pointer font-medium m-2 hover:bg-gray-200"
                    placeholder={userData.data?.name}
                    disabled
                  />
                  <br />
                  <input
                    type="text"
                    className="border border-gray-400 rounded-md w-full p-2 cursor-pointer font-medium m-2 hover:bg-gray-200"
                    placeholder={userData.data?.email}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
