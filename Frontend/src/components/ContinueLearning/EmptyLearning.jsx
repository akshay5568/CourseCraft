import React from 'react'
import { MdMenuBook } from 'react-icons/md';
import { Link } from 'react-router';

export const EmptyLearning = () => {
  return (
       <div
      className="
        min-h-[80vh]
        flex
        items-center
        justify-center
        px-4
        bg-[#f7f9fa]
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          bg-white
          border
          border-gray-200
          rounded-3xl
          shadow-sm
          p-8
          md:p-12
          text-center
        "
      >
        {/* ICON */}
        <div
          className="
            w-20
            h-20
            rounded-full
            bg-purple-100
            flex
            items-center
            justify-center
            mx-auto
          "
        >
          <MdMenuBook className="text-4xl text-purple-700" />
        </div>

        {/* TITLE */}
        <h1
          className="
            mt-6
            text-2xl
            md:text-3xl
            font-bold
            text-[#1c1d1f]
          "
        >
          Start Your Learning Journey
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4
            text-sm
            md:text-base
            text-[#6a6f73]
            leading-7
          "
        >
          You have not purchased any
          courses yet. Explore our
          premium courses and start
          building your skills today.
        </p>

        {/* BUTTON */}
        <Link to={"/"}>
          <button
            className="
              mt-8
              bg-purple-600
              hover:bg-purple-700
              transition
              text-white
              font-medium
              px-8
              py-3
              rounded-xl
              cursor-pointer
              shadow-md
            "
          >
            Browse Courses
          </button>
        </Link>
      </div>
    </div>
  )
}

export default EmptyLearning;