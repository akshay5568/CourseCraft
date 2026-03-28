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
    <div className="w-15 text-center bg-black flex text-white">
      <div className="w-full text-2xl mt-3">

        <Link to={`/dashboard/${sellerData._id}`} className="text-xl flex justify-center mb-4 hover:bg-white p-1 rounded-md hover:text-black w-full">
          <FaMoneyBillTrendUp/>
        </Link>

        <Link to={`/seller-courses/${sellerData._id}`}>
          <MdManageAccounts className="m-auto hover:bg-gray-200 w-7 rounded-md hover:text-black" />
        </Link>

        <button
          className="mb-4 mt-4 cursor-pointer p-2 hover:bg-gray-200 hover:text-black rounded-md"
          onClick={() => sellerAccountDelete(setPop,sellerData,token,isPop)}
        >
          <MdDelete />
        </button>
        <br />

        <button
          className="cursor-pointer hover:bg-gray-200 rounded-md p-2 hover:text-black"
          onClick={logoutHandle}
        >
          <CiLogout />
        </button>
      </div>

      {isPop && <PopUpSellerDelete setPop={setPop}   />}
    </div>
  );
};

export default NavBar;
