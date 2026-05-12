import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/coursecraft-high-resolution-logo-transparent.png";
import { Link } from "react-router";
import { FaOpencart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import useRefreshSellerHandle from "../../Hooks/useRefreshSellerHandle";
import { MdOutlineSchool } from "react-icons/md";
import { MdPlayCircleFilled } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { FaChalkboardTeacher } from "react-icons/fa";

const Header = () => {
  useRefreshSellerHandle();
  const userData = useSelector((state) => state.User);
  const cartLength = useSelector((state) => state?.Carts?.carts?.length);
  const sellerData = useSelector((state) => state.Seller?.sellerData);
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        bg-white
        border-b
        border-gray-200
      "
    >
      <div
        className="
          max-w-[1400px]
          mx-auto
          h-[72px]
          px-4
          lg:px-8
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to={"/"} className="shrink-0">
            <img
              src={logo}
              alt="CourseCraft"
              className="
                h-8
                sm:h-10
                object-contain
              "
            />
          </Link>

          {/* Explore */}
          <button
            className="
              hidden
              md:block
              text-sm
              text-[#1c1d1f]
              hover:text-purple-700
              transition
              font-medium
            "
          >
            Explore
          </button>
        </div>

        {/* SEARCH */}
        <div className="flex-1 hidden md:block">
          <SearchBar />
        </div>

        {/* RIGHT */}
        {userData.data?.email ? (
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Continue Learning */}
            <Link to={"/learning"}>
              {/* DESKTOP */}
              <div
                className="
      hidden
      md:flex
      items-center
      gap-2
      hover:bg-purple-100
      hover:text-purple-700
      transition
      px-3
      py-2
      rounded-lg
    "
              >
                <MdPlayCircleFilled className="text-lg" />

                <span className="text-sm font-medium">Continue Learning</span>
              </div>
            </Link>

            {/* Instructor */}
            {sellerData?._id ? (
              <Link
                to={`/seller-home-page/${sellerData?._id}`}
                className="
      flex
      items-center
      justify-center
      gap-2
      p-2
      rounded-full
      hover:bg-gray-100
      transition
      text-[#1c1d1f]
      hover:text-purple-700
    "
              >
                {/* DESKTOP */}
                <span className="hidden md:block text-sm">
                  Instructor Dashboard
                </span>
              </Link>
            ) : (
              <Link
                to={"/become-instructor"}
                className="
      flex
      items-center
      justify-center
      gap-2
      p-2
      rounded-full
      hover:bg-gray-100
      transition
      text-[#1c1d1f]
      hover:text-purple-700
    "
              >
                {/* MOBILE */}
                <MdOutlineSchool className="text-[22px] md:hidden" />

                {/* DESKTOP */}
                <span className="hidden md:block text-sm">
                  Teach on CourseCraft
                </span>
              </Link>
            )}

            {/* Cart */}
            <Link
              to={"/cart"}
              className="
                relative
                p-2
                rounded-full
                hover:bg-gray-100
                transition
              "
            >
              <FaOpencart className="text-[22px] text-[#1c1d1f]" />

              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  bg-purple-600
                  text-white
                  text-[10px]
                  min-w-[18px]
                  h-[18px]
                  flex
                  items-center
                  justify-center
                  rounded-full
                  px-1
                  font-medium
                "
              >
                {cartLength || 0}
              </span>
            </Link>

            {/* Profile */}
            <Link
              to={"/profile"}
              className="
                p-2
                rounded-full
                hover:bg-gray-100
                transition
              "
            >
              <CgProfile className="text-[24px] text-[#1c1d1f]" />
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {/* Login */}
            <Link
              to={"/signin"}
              className="
                hidden
                sm:flex
                border
                border-black
                px-4
                py-2
                text-sm
                font-medium
                hover:bg-gray-100
                transition
              "
            >
              Log in
            </Link>

            {/* Signup */}
            <Link
              to={"/signup"}
              className="
                bg-[#1c1d1f]
                text-white
                px-4
                py-2
                text-sm
                font-medium
                hover:bg-black
                transition
              "
            >
              Sign up
            </Link>
          </div>
        )}
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-4 pb-3 bg-white">
        <SearchBar />
      </div>

      {/* MOBILE BOTTOM NAVBAR */}

      <div
        className="
    fixed
    bottom-0
    left-0
    w-full
    bg-white
    border-t
    border-gray-200
    flex
    justify-around
    items-center
    py-3
    z-50
    md:hidden
  "
      >
        {/* HOME */}
        <Link to={"/"}>
          <div
            className="
        flex
        flex-col
        items-center
        text-xs
        text-gray-600
        hover:text-purple-700
      "
          >
            <FaHome className="text-lg" />

            <span>Home</span>
          </div>
        </Link>

        {/* LEARNING */}
        {userData.data.name != "JsonWebTokenError" && (
          <Link to={"/learning"}>
            <div
              className="
        flex
        flex-col
        items-center
        text-xs
        text-gray-600
        hover:text-purple-700
      "
            >
              <MdPlayCircleFilled className="text-lg" />

              <span>Learning</span>
            </div>
          </Link>
        )}

        {/* INSTRUCTOR */}
        {userData.data.name != "JsonWebTokenError" && (
        <Link
          to={
            sellerData?._id
              ? `/seller-home-page/${sellerData?._id}`
              : "/become-instructor"
          }
        >
          <div
            className="
        flex
        flex-col
        items-center
        text-xs
        text-gray-600
        hover:text-purple-700
      "
          >
            <FaChalkboardTeacher className="text-lg" />

            <span>Teach</span>
          </div>
        </Link>
          )}

        {/* CART */}
        <Link to={"/cart"}>
          <div
            className="
        relative
        flex
        flex-col
        items-center
        text-xs
        text-gray-600
        hover:text-purple-700
      "
          >
            <div className="relative">
              <FaOpencart className="text-lg" />

              <span
                className="
            absolute
            -top-2
            -right-3
            bg-purple-600
            text-white
            text-[10px]
            rounded-full
            px-1
          "
              >
                {cartLength || 0}
              </span>
            </div>

            <span>Cart</span>
          </div>
        </Link>

        {/* PROFILE */}
        {userData.data.name != "JsonWebTokenError" ? (
          <Link to={"/profile"}>
            <div
              className="
        flex
        flex-col
        items-center
        text-xs
        text-gray-600
        hover:text-purple-700
      "
            >
              <CgProfile className="text-lg" />

              <span>Profile</span>
            </div>
          </Link>
        ) : <Link className="font-extralight" to={"/signin"}>Sign in</Link>}
      </div>
    </header>
  );
};

export default Header;
