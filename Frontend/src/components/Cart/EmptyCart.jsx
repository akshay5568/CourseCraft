import React from "react";
import { EmptyCartImage } from "../../Constants/Constant.js";
import { Link } from "react-router";

export const EmptyCart = () => {
  return (
      <div className="min-h-screen bg-white">
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-4
          md:px-8
          py-10
        "
      >
        {/* HEADING */}
        <div>
          <h1
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-[#1c1d1f]
            "
          >
            Shopping Cart
          </h1>

          <p
            className="
              mt-3
              text-sm
              text-[#6a6f73]
            "
          >
            0 Courses in Cart
          </p>
        </div>

        {/* EMPTY STATE */}
        <div
          className="
            mt-12
            border
            border-gray-200
            rounded-xl
            flex
            flex-col
            items-center
            justify-center
            text-center
            py-16
            px-6
          "
        >
          {/* IMAGE */}
          <div
            className="
              w-[220px]
              sm:w-[280px]
            "
          >
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="w-full object-contain"
            />
          </div>

          {/* TEXT */}
          <h2
            className="
              mt-8
              text-2xl
              font-bold
              text-[#1c1d1f]
            "
          >
            Your cart is empty
          </h2>

          <p
            className="
              mt-3
              text-[#6a6f73]
              max-w-[500px]
              leading-6
            "
          >
            Looks like you haven’t added any
            courses yet. Explore thousands of
            courses and start learning today.
          </p>

          {/* BUTTON */}
          <Link
            to={"/"}
            className="
              mt-8
              bg-[#a435f0]
              hover:bg-[#8710d8]
              transition
              text-white
              font-bold
              px-8
              py-4
              rounded-md
            "
          >
            Keep Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
