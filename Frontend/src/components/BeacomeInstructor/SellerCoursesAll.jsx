import React from "react";
import SellerHeader from "./SellerHeader";
import { useEffect } from "react";
import axios from "axios";
import { mainURL } from "../../Constants/Constant";
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
    <div>
      <SellerHeader />
      <div>
        <h1>All Courses</h1>
        <div className="flex flex-wrap gap-3 p-3 rounded-md">
          {data?.map((item, index) => {
            return (
              <Link
                to={`/course-edit/${data[index]._id}`}
                className="bg-gray-200 p-3 rounded-md"
              >
                <img className="w-50" src={item.thubmnail} alt="" />
                <div>
                  <h1>{item.courseName}</h1>
                  <h4 className="font-semibold text-xl">${item.price}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SellerCoursesAll;
