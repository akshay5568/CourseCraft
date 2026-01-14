import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const SearchBar = () => {
  const allCourses = useSelector((state) => state.CourseDetails.allCourses);
  console.log(allCourses);
  const [inputData, setInputData] = useState();
  const [searchBarToggle, setSearchBarToggle] = useState();

  const filterCourse = allCourses.filter((course) => {
    return course?.courseName
      ?.toLowerCase()
      ?.includes(inputData?.toLowerCase());
  });

  console.log(filterCourse);
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          onFocus={() => setSearchBarToggle(true)}
          onBlur={() =>
            setTimeout(() => {
              setSearchBarToggle(false);
            }, 200)
          }
          onChange={(e) => setInputData(e.target.value)}
          className="p-3 border border-gray-300 rounded-full w-150 text-xl bg-[#ffffff]"
        />

        {searchBarToggle && (
          <div>
            <div className="absolute z-50 w-150 rounded-md h-50 overflow-scroll bg-[#ffffff] border border-gray-100">
              {filterCourse.map((course) => {
                return (
                  <Link
                    className="w-full bg-amber-500"
                    to={`/course/${course?._id}`}
                  >
                    <span className="block bg-gray-100 m-1 hover:shadow-2xl border-t border-gray-300 border-b rounded-md p-3 text-sm font-semibold">
                      {course.courseName}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
