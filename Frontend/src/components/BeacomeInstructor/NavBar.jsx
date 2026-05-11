import { MdManageAccounts } from "react-icons/md";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../Hooks/useLogout";
import { useSelector } from "react-redux";
import { sellerAccountDelete } from "../../Constants/Constant.js";
import { useState } from "react";
import PopUpSellerDelete from "./PopUpSellerDelete";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export const NavBar = () => {
  const { logoutHandle } = useLogout();
  const [isPop, setPop] = useState(false);
  const sellerData = useSelector((state) => state.Seller?.sellerData);
  const token = localStorage.getItem("jwtToken");


  return (
      <div
      className="
        w-full
        md:w-18
        bg-black
        text-white

        fixed
        bottom-0
        left-0
        z-50

        md:top-0
        md:h-screen

        flex
        md:flex-col
        items-center
        justify-around
        md:justify-start

        py-3
        md:py-5

        border-t
        md:border-t-0
        md:border-r
        border-gray-800
      "
    >
      <div
        className="
          w-full
          flex
          md:flex-col
          items-center
          justify-around
          md:justify-start
          md:gap-5
        "
      >
        {/* DASHBOARD */}
        <Link
          to={`/dashboard/${sellerData._id}`}
          className="
            text-xl
            flex
            justify-center
            items-center

            p-3
            rounded-xl

            hover:bg-white
            hover:text-black
            transition
          "
        >
          <FaMoneyBillTrendUp />
        </Link>

        {/* COURSES */}
        <Link
          to={`/seller-courses/${sellerData._id}`}
          className="
            text-2xl
            flex
            justify-center
            items-center

            p-3
            rounded-xl

            hover:bg-white
            hover:text-black
            transition
          "
        >
          <MdManageAccounts />
        </Link>

        {/* DELETE */}
        <button
          className="
            text-2xl
            cursor-pointer

            p-3
            rounded-xl

            hover:bg-red-500
            transition
          "
          onClick={() =>
            sellerAccountDelete(
              setPop,
              sellerData,
              token,
              isPop
            )
          }
        >
          <MdDelete />
        </button>

        {/* LOGOUT */}
        <button
          className="
            text-2xl
            cursor-pointer

            p-3
            rounded-xl

            hover:bg-white
            hover:text-black
            transition
          "
          onClick={logoutHandle}
        >
          <CiLogout />
        </button>
      </div>

      {isPop && (
        <PopUpSellerDelete
          setPop={setPop}
        />
      )}
    </div>
  );
};

export default NavBar;
