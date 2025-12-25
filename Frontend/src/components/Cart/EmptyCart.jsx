import React from "react";
import { EmptyCartImage } from "../../Constants/Constant";
import { Link } from "react-router";

export const EmptyCart = () => {
  return (
    <div className="ml-25 mr-25 mt-10 font-semibold">
      <div className="p-2">
        <span className="text-5xl mb-10 text-[#2a2b40]">Shopping Cart</span>
        <br /><br /><br />
        <span className="font-medium">0 Courses in Cart</span>
      </div>

      <div className="shadow-xl h-87 mt-10">
        <div className="w-60 m-auto">
          <img src={EmptyCartImage} alt="" />
        </div>
        <div className="mt-8 text-center">
          <span className="text-[#5f5f6e] font-light">
            Your cart is empty. Keep shopping to find a course!
          </span>
          <br /><br />
          <Link to={"/"}>
            <span className="mt-8 bg-[#6d29d2] p-2 rounded-md text-white text-sm hover:bg-purple-500">
              Keep Shopping
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
