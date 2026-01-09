import { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const allCourses = useSelector((state) => state.CourseDetails.allCourses);
  const [inputData, setInputData] = useState();
  const [searchBarToggle, setSearchBarToggle] = useState();
  return (
    <div>
      <div>
        <input
          type="text"
          onFocus={() => setSearchBarToggle(true)}
          onBlur={() => setSearchBarToggle(false)}
          onChange={(e) => setInputData(e.target.value)}
          className="p-3 border border-gray-300 rounded-full w-150 text-xl bg-[#ffffff]"
        />

        {searchBarToggle && (
          <div>
            <div className="absolute w-150 rounded-md h-50 bg-[#ffffff] border border-gray-100"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
