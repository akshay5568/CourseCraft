import axios from "axios";
import React from "react";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { mainURL } from "../../Constants/Constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const PopUpSellerDelete = ({ setPop }) => {
  const password = useRef();
  const userData = useSelector((state) => state.User);

  const redirect = useNavigate();

  const sellerBtn = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const pass = password.current.value;
      if (pass == "") return alert("Please enter the password");
      const res = await axios.post(
        `${mainURL}/delete-seller-account-pass`,
        { userData, pass },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data);
      redirect('/');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="absolute w-100 left-[35%] rounded-md h-50 top-30 shadow-2xl bg-white p-3">
      <button
        onClick={() => setPop(false)}
        className="text-xl cursor-pointer text-black"
      >
        <IoMdClose />
      </button>
      <div className="mt-5 text-black text-center">
        <h1 className="mb-3 font-semibold text-sm">
          Are you sure to delete this seller account?
        </h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          {" "}
          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="bg-gray-300 border-black p-3 rounded-md"
          />
          <br />
          <button
            onClick={sellerBtn}
            className="mt-4 bg-purple-400 hover:text-purple-200 cursor-pointer p-2 px-5 rounded-md text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpSellerDelete;
