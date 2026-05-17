import React from "react";
import SellerHeader from "./SellerHeader";
import { useEffect } from "react";
import axios from "axios";
import { mainURL } from "../../Constants/Constant.js";
import { data, Link, useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSellerCourses } from "../../Slice/SellerAllCourses.js";
import useGetAllSellerCourses from "../../Hooks/ForSeller/useGetAllSellerCourses.js";
import Loading from "../ShimmerUI/Loading.jsx";
export const SellerCoursesAll = () => {
  const { id } = useParams();

  const data = useSelector((state) => state.SellerAllCourses);
  
  useGetAllSellerCourses(id);
  if(data.loading) return <Loading/>
  return (
    <div className="min-h-screen bg-[#f7f9fa]">
      <SellerHeader />

      <div
        className="
          w-full

          px-4
          sm:px-6
          md:px-10

          py-6
          md:py-10
        "
      >
        {/* PAGE HEADER */}
        <div
          className="
            flex
            flex-col
            sm:flex-row

            sm:items-center
            sm:justify-between

            gap-4
          "
        >
          <div>
            <h1
              className="
                text-3xl
                md:text-4xl

                font-bold

                text-[#1c1d1f]
              "
            >
              All Courses
            </h1>

            <p
              className="
                mt-2

                text-sm
                md:text-base

                text-[#6a6f73]
              "
            >
              Manage and edit your uploaded courses.
            </p>
          </div>
        </div>

        {/* COURSE GRID */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4

            gap-6

            mt-8
          "
        >
          {data?.course?.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/course-edit/${data?.course[index]._id}`}
                className="
                  group

                  bg-white

                  border
                  border-gray-200

                  rounded-2xl

                  overflow-hidden

                  shadow-sm
                  hover:shadow-xl

                  transition-all
                  duration-300
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    w-full
                    overflow-hidden
                  "
                >
                  <img
                    className="
                      w-full

                      h-52
                      sm:h-56

                      object-cover

                      group-hover:scale-105

                      transition
                      duration-300
                    "
                    src={item.thubmnailUrl ? item.thubmnailUrl : item.thubmnail}
                    alt=""
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h1
                    className="
                      text-lg

                      font-semibold

                      text-[#1c1d1f]

                      break-words

                      line-clamp-2
                    "
                  >
                    {item.courseName.substring(0, 50)}
                  </h1>

                  <div
                    className="
                      mt-4

                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-xl
                        font-bold

                        text-purple-700
                      "
                    >
                      ₹{item.price}
                    </span>

                    <span
                      className="
                        text-xs
                        sm:text-sm

                        px-3
                        py-1

                        rounded-full

                        bg-purple-100
                        text-purple-700

                        font-medium
                      "
                    >
                      Edit Course
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {data?.course?.length === 0 && (
          <div
            className="
              mt-20

              bg-white

              border
              border-dashed
              border-gray-300

              rounded-3xl

              p-10

              text-center
            "
          >
            <h1
              className="
                text-2xl
                font-semibold

                text-[#1c1d1f]
              "
            >
              No Courses Yet
            </h1>

            <p
              className="
                mt-3

                text-[#6a6f73]
              "
            >
              Start creating your first course and grow your audience.
            </p>

            <Link
              to={"/create-course"}
              className="
                inline-block

                mt-6

                bg-purple-600
                hover:bg-purple-700

                text-white

                px-6
                py-3

                rounded-2xl

                font-medium

                transition
              "
            >
              Create Course
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerCoursesAll;
