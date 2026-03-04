import React from "react";
import SellerHeader from "./SellerHeader";
import { useEffect } from "react";
import axios from "axios";
import { mainURL } from "../../Constants/Constant.js";
import { data, Link, useParams } from "react-router";
import { useState } from "react";
export const SellerCoursesAll = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  const getCourses = async () => {
    const token = localStorage.getItem("jwtToken");
    const res = await axios.post(
      `${mainURL}/seller-courses`,
      { id },
      {
        headers: {
          Authorization: `Breare ${token}`,
        },
      }
    );
    setData(res.data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="w-full">
      <SellerHeader />
      <div className="p-3 w-full">
        <h1 className="font-extralight text-2xl">All Courses</h1>
      <div className="w-full flex flex-wrap">
           {data?.map((item, index) => {
            return (
            <div key={index} className="w-[20%] flex gap-3 p-3 rounded-md">
              <Link
                to={`/course-edit/${data[index]._id}`}
                className="border border-gray-300 w-70 p-3 rounded-md"
              >
                <img
                  className="w-full object-cover h-40 rounded-md"
                  src={item.thubmnailUrl ? item.thubmnailUrl : item.thubmnail}
                  alt=""
                />
                <div className="">
                  <h1 className="font-semibold break-all">{item.courseName.substring(0,50)}</h1>
                  <h4 className="font-extralight text-sm">₹{item.price}</h4>
                </div>
              </Link>
             </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SellerCoursesAll;
