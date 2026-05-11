import Header from "../Header/Header";
import { useSelector } from "react-redux";
import ProfileTag from "../HomePage/ProfileTag";
import useLogout from "../../Hooks/useLogout";

export const Profile = () => {
  const userData = useSelector((state) => state.User);
  const { logoutHandle } = useLogout();
  return (
     <div className="min-h-screen bg-[#f7f9fa]">
      <Header />

      <div
        className="
          max-w-[1400px]
          mx-auto
          px-4
          md:px-8
          py-8
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-8
          "
        >
          {/* SIDEBAR */}
          <div
            className="
              lg:w-[300px]
              bg-white
              border
              border-gray-200
              rounded-xl
              p-6
              h-fit
            "
          >
            {/* PROFILE */}
            <div className="flex flex-col items-center">
              <ProfileTag isProfile={true} />

              <h2
                className="
                  mt-4
                  text-xl
                  font-bold
                  text-[#1c1d1f]
                "
              >
                {userData?.data?.name}
              </h2>

              <p
                className="
                  text-sm
                  text-[#6a6f73]
                  mt-1
                "
              >
                {userData?.data?.email}
              </p>
            </div>

            {/* MENU */}
            <div className="mt-8 border-t pt-5">
              <button
                onClick={logoutHandle}
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-lg
                  text-red-500
                  hover:bg-red-50
                  transition
                  font-medium
                "
              >
                Logout
              </button>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              flex-1
              bg-white
              border
              border-gray-200
              rounded-xl
              overflow-hidden
            "
          >
            {/* HEADER */}
            <div
              className="
                border-b
                border-gray-200
                px-6
                py-5
              "
            >
              <h1
                className="
                  text-2xl
                  font-bold
                  text-[#1c1d1f]
                "
              >
                Public Profile
              </h1>

              <p
                className="
                  text-sm
                  text-[#6a6f73]
                  mt-1
                "
              >
                Add information about yourself
              </p>
            </div>

            {/* FORM */}
            <div className="p-6">
              <div className="max-w-[700px]">
                {/* BASIC */}
                <div>
                  <h2
                    className="
                      text-lg
                      font-bold
                      text-[#1c1d1f]
                      mb-5
                    "
                  >
                    Basic Information
                  </h2>

                  {/* NAME */}
                  <div className="mb-5">
                    <label
                      className="
                        block
                        text-sm
                        font-medium
                        mb-2
                        text-[#1c1d1f]
                      "
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={userData.data?.name}
                      disabled
                      className="
                        w-full
                        border
                        border-gray-300
                        rounded-lg
                        px-4
                        py-3
                        bg-gray-50
                        text-[#1c1d1f]
                        outline-none
                      "
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      className="
                        block
                        text-sm
                        font-medium
                        mb-2
                        text-[#1c1d1f]
                      "
                    >
                      Email Address
                    </label>

                    <input
                      type="text"
                      value={userData.data?.email}
                      disabled
                      className="
                        w-full
                        border
                        border-gray-300
                        rounded-lg
                        px-4
                        py-3
                        bg-gray-50
                        text-[#1c1d1f]
                        outline-none
                      "
                    />
                  </div>
                </div>

                {/* SAVE BUTTON */}
                <div className="mt-8">
                  <button
                    className="
                      bg-[#a435f0]
                      hover:bg-[#8710d8]
                      transition
                      text-white
                      px-6
                      py-3
                      rounded-lg
                      font-bold
                    "
                  >
                    Save Changes
                  </button>
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
