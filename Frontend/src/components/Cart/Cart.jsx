import { useSelector } from "react-redux";
import Header from "../Header/Header";
import CartBtn from "./CartBtn";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router";
import { MdLocalOffer } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { mainURL } from "../../Constants/Constant";
import useUserCarts from "../../Hooks/useUserCarts";
import useGetAllCourses from "../../Hooks/useGetAllCourses";

export const Cart = () => {
  
  const userCartData = useSelector((state) => state?.Carts?.carts);
  const [refresh, setRefresh] = useState(0);
  useUserCarts(refresh);

  if (userCartData.length == 0) {
    return <EmptyCart />;
  }

  const total = userCartData.reduce(
    (sum, item) => sum + item?.courseId?.price,
    0
  );

  const removeCartBTN = async (id) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios.delete(`${mainURL}/cart/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRefresh(refresh + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <div className="min-h-screen bg-white">
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
        {/* HEADING */}
        <div className="mb-8">
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
              mt-2
              text-sm
              text-[#6a6f73]
            "
          >
            {userCartData?.length} Courses in Cart
          </p>
        </div>

        {/* LAYOUT */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-10
          "
        >
          {/* LEFT SIDE */}
          <div className="flex-1">
            {userCartData?.map((cart) => (
              <div
                key={cart?._id}
                className="
                  border-t
                  border-gray-200
                  py-5
                  flex
                  flex-col
                  sm:flex-row
                  gap-5
                "
              >
                {/* COURSE */}
                <Link
                  to={`/course/${cart?.courseId?._id}`}
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-4
                    flex-1
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      w-full
                      sm:w-[240px]
                      shrink-0
                    "
                  >
                    <img
                      className="
                        w-full
                        h-[140px]
                        object-cover
                        rounded-md
                      "
                      src={
                        cart.courseId?.thubmnail
                          ? cart.courseId?.thubmnail
                          : cart.courseId?.thubmnailUrl
                      }
                      alt="course"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <h3
                      className="
                        text-lg
                        font-bold
                        text-[#1c1d1f]
                        line-clamp-2
                      "
                    >
                      {cart.courseId?.courseName}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-[#6a6f73]
                        mt-2
                      "
                    >
                      By {cart.courseId?.createdBy?.name}
                    </p>

                    {/* RATINGS */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mt-2
                      "
                    >
                      <span
                        className="
                          text-[#b4690e]
                          font-bold
                          text-sm
                        "
                      >
                        4.7
                      </span>

                      <div className="text-yellow-500 text-sm">
                        ★★★★★
                      </div>

                      <span
                        className="
                          text-xs
                          text-[#6a6f73]
                        "
                      >
                        (
                        {
                          cart.courseId
                            ?.enrolledStudents
                            ?.length
                        }
                        )
                      </span>
                    </div>

                    {/* BESTSELLER */}
                    <div className="mt-3">
                      <span
                        className="
                          bg-[#eceb98]
                          text-[#3d3c0a]
                          text-xs
                          font-bold
                          px-2
                          py-1
                        "
                      >
                        Bestseller
                      </span>
                    </div>
                  </div>
                </Link>

                {/* ACTIONS */}
                <div
                  className="
                    flex
                    lg:flex-col
                    justify-between
                    gap-4
                  "
                >
                  {/* REMOVE */}
                  <button
                    onClick={() =>
                      removeCartBTN(cart?._id)
                    }
                    className="
                      text-sm
                      text-purple-700
                      hover:text-purple-900
                      font-medium
                    "
                  >
                    Remove
                  </button>

                  {/* PRICE */}
                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      text-xl
                      font-bold
                      text-[#a435f0]
                    "
                  >
                    ₹{cart.courseId?.price}

                    <MdLocalOffer />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              lg:w-[320px]
              h-fit
              lg:sticky
              lg:top-24
            "
          >
            <div
              className="
                border
                border-gray-200
                p-6
                rounded-lg
                shadow-sm
              "
            >
              <p
                className="
                  text-[#6a6f73]
                  text-lg
                  font-medium
                "
              >
                Total:
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                  text-[#1c1d1f]
                  mt-2
                "
              >
                ₹{total}
              </h2>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
