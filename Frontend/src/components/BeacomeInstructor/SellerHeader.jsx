
import ProfileTag from '../HomePage/ProfileTag';
import { Link } from 'react-router';
import logo from "../../assets/coursecraft-high-resolution-logo-transparent.png";
import { useSelector } from 'react-redux';
import useRefreshSellerHandle from '../../Hooks/useRefreshSellerHandle';

export const SellerHeader = () => {
  useRefreshSellerHandle();
  return (
      <div
      className="
        sticky
        top-0
        z-40

        w-full
        bg-white

        border-b
        border-gray-200

        h-16
        md:h-18

        flex
        items-center
        justify-between

        px-4
        md:px-8

        shadow-sm
      "
    >
      {/* LOGO */}
      <div
        className="
          flex
          items-center
        "
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="
              w-32
              sm:w-40
              md:w-48

              object-contain
              cursor-pointer
            "
          />
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          flex
          items-center

          gap-2
          sm:gap-4
          md:gap-6
        "
      >
        {/* STUDENT PANEL */}
        <Link
          to={"/"}
          className="
            hidden
            sm:flex

            items-center

            text-xs
            md:text-sm

            font-medium

            text-[#2d2f31]

            hover:bg-purple-100
            hover:text-purple-700

            px-3
            py-2

            rounded-xl

            transition
          "
        >
          Student Panel
        </Link>

        {/* MOBILE ICON BUTTON */}
        <Link
          to={"/"}
          className="
            sm:hidden

            text-xs

            bg-purple-100
            text-purple-700

            px-3
            py-2

            rounded-lg

            font-medium
          "
        >
          Home
        </Link>

        {/* PROFILE */}
        <Link
          to={"/profile"}
          className="
            hover:bg-gray-100

            rounded-full

            p-1.5

            transition
          "
        >
          <ProfileTag isProfile={true} />
        </Link>
      </div>
    </div>
  )
}


export default SellerHeader;