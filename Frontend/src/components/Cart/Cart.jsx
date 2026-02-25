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
    return <EmptyCart/>;
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
    <div>
      <Header />
      {userCartData?.length != 0 ? (
        <div className="ml-25 mr-25">
          <div className="mt-5">
            <div>
              <h1 className="text-5xl font-semibold mb-5">Shppping Cart</h1>
              <span className="text-sm font-semibold">
                {userCartData?.length} Courses in Cart
              </span>
            </div>
            <div className="flex">
              <div className="w-[80%]">
                {userCartData?.map((cart) => {
                  return (
                    <div className="gap-20 w-[80%] flex border-t p-3  border-gray-200 ]">
                      <Link
                        className="gap-15 w-[50%] flex"
                        to={`/course/${cart?.courseId?._id}`}
                        key={cart?._id}
                      >
                        <div className="w-[30%]">
                          <img
                            className="w-70 h-20 object-contain rounded-md"
                            src={
                              cart.courseId.thubmnail
                                ? cart.courseId.thubmnail
                                : cart.courseId.thubmnailUrl
                            }
                            alt=""
                          />
                        </div>
                        <div className="text-sm w-[70%] font-semibold ">
                          <h3>{cart.courseId?.courseName}</h3>
                          <h3 className="text-xs font-extralight pt-1">
                            By {cart.courseId?.createdBy?.name}
                          </h3>
                          <h3 className="text-xs font-extralight pt-1">
                            ({cart.courseId?.enrolledStudents.length} Ratings)
                          </h3>
                        </div>
                      </Link>

                      <div className="">
                        <button
                          onClick={() => removeCartBTN(cart?._id)}
                          className="text-[#7432d5] p-1 hover:bg-purple-100 font-extralight rounded-md cursor-pointer text-sm"
                        >
                          Remove
                        </button>
                      </div>

                      <div>
                        <div className="flex items-center gap-0.5 text-[#a535f1]">
                          <span>${cart.courseId?.price}</span>
                          <br />
                          <span>
                            <MdLocalOffer />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div>
                  <span className="text-[#5a5c72] font-semibold">Total:</span>
                  <br />
                  {userCartData &&  <span className="font-medium text-5xl">${total}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
