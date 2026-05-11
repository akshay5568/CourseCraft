import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const allCourses = useSelector((state) => state.CourseDetails.allCourses);
  const [inputData, setInputData] = useState();
  const [searchBarToggle, setSearchBarToggle] = useState();

  const filterCourse = allCourses.filter((course) => {
    return course?.courseName
      ?.toLowerCase()
      ?.includes(inputData?.toLowerCase());
  });
  return (
    <div className="relative w-full">
      {/* INPUT */}
      <div
        className="
          flex
          items-center
          border
          border-gray-300
          rounded-full
          px-4
          bg-white
          focus-within:border-black
          transition-all
          duration-200
          h-12
        "
      >
        {/* ICON */}
        <FiSearch className="text-gray-500 text-lg mr-3" />

        {/* INPUT */}
        <input
          type="text"
          placeholder="Search for anything"
          value={inputData}
          onFocus={() => setSearchBarToggle(true)}
          onBlur={() =>
            setTimeout(() => {
              setSearchBarToggle(false);
            }, 200)
          }
          onChange={(e) => setInputData(e.target.value)}
          className="
            w-full
            outline-none
            text-sm
            bg-transparent
            placeholder:text-gray-500
          "
        />
      </div>

      {/* DROPDOWN */}
      {searchBarToggle && inputData && (
        <div
          className="
            absolute
            top-[55px]
            left-0
            w-full
            bg-white
            border
            border-gray-200
            rounded-xl
            shadow-xl
            z-50
            max-h-[400px]
            overflow-y-auto
            py-2
          "
        >
          {filterCourse.length > 0 ? (
            filterCourse.map((course) => (
              <Link
                key={course?._id}
                to={`/course/${course?._id}`}
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  hover:bg-gray-100
                  transition
                "
              >
                {/* Search Icon */}
                <FiSearch className="text-gray-400 text-sm" />

                {/* Course Name */}
                <span
                  className="
                    text-sm
                    text-[#1c1d1f]
                    font-medium
                    line-clamp-1
                  "
                >
                  {course.courseName}
                </span>
              </Link>
            ))
          ) : (
            <div className="px-4 py-5 text-sm text-gray-500">
              No courses found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
