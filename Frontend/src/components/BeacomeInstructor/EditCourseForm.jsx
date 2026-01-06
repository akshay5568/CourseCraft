import axios from "axios";
import { useRef } from "react";
import { mainURL } from "../../Constants/Constant";

export const EditCourseForm = ({ setisEditTrue, isEditTrueValue }) => {
  const coursName = useRef();
  const description = useRef();
  const price = useRef();
  const thumbnail = useRef();

  const editFormEtnHandller = async () => {
    const token = localStorage.getItem("jwtToken");
    const updatedCourseDetails = {
      courseName: coursName.current.value,
      description: description.current.value,
      price: price.current.value,
    };
    const formData = new FormData();
    formData.append(
      "updetedCourseDetails",
      JSON.stringify(updatedCourseDetails)
    );
    formData.append("thumbnail", thumbnail.current.files[0]);

    const res = await axios.put(`${mainURL}/course-update`, formData, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
    console.log(res.data);
  };

  return (
    <div className="absolute w-[50%] top-50 left-80 h-fit bg-gray-300 p-5 rounded-md">
      <div>
        <button
          onClick={() => setisEditTrue(!isEditTrueValue)}
          className="font-semibold mb-3 cursor-pointer"
        >
          ╳
        </button>
      </div>
      <div className="">
        <form onClick={(e) => e.preventDefault()}>
          <label htmlFor="courseName" className="text-sm font-semibold">
            Enter new course name:
          </label>
          <br />
          <input
            id="courseName"
            type="text"
            ref={coursName}
            className="w-full mb-3 border border-black p-2 rounded-md"
            placeholder="Enter new course name"
          />
          <label htmlFor="dec" className="text-sm font-semibold">
            Enter new course Description:
          </label>
          <br />
          <input
            id="dec"
            ref={description}
            type="text"
            className="w-full mb-3 border border-black p-2 rounded-md"
            placeholder="Enter new course Description"
          />
          <label htmlFor="price" className="text-sm font-semibold">
            Enter new course Price:
          </label>
          <br />
          <input
            id="price"
            type="number"
            ref={price}
            className="w-full mb-3 border border-black p-2 rounded-md"
            placeholder="Enter new course Price"
          />
          <label htmlFor="thum" className="text-sm font-semibold">
            Enter new course thumbnail:
          </label>
          <br />
          <input
            id="thum"
            type="file"
            ref={thumbnail}
            name="thumbnail"
            className="w-full mb-3 border border-black p-2 rounded-md"
            placeholder="Enter new course name"
          />
          <button
            onClick={editFormEtnHandller}
            className="m-auto w-full bg-amber-300 p-2 rounded-md text-sm font-semibold"
          >
            Update details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourseForm;
