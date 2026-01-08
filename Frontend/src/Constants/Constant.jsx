import axios from "axios";
import { courseDataChecker } from "../../../Backend/utils/EmptyCourseDataChecker";

export const signInLogo =
  "https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp";

export const passwordEmailChecker = (email, password) => {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(
    password
  );

  if (!isEmail) {
    return "Please Add @ and Follow proper email convenstion";
  } else if (!isPass) return "Please add @ and special char in Password";

  return null;
};

export const mainURL = "http://localhost:8080";

export const EmptyCartImage =
  "https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg";

export const sellerAccountDelete = async (setPop, sellerData, token, isPop) => {
  const res = await axios.post(`${mainURL}/delete-seller-account`, sellerData, {
    headers: {
      Authorization: `Brearer ${token}`,
    },
  });
  if (res.data == true) {
    setPop(!isPop);
  }
};

export const editFormEtnHandller = async (
  setFormEmptyError,
  courseName,
  price,
  description,
  courseId,
  thumbnail,
  redirect,
  sellerId
) => {
  const token = localStorage.getItem("jwtToken");

  const updatedCourseDetails = {
    courseName: courseName.current.value,
    description: description.current.value,
    price: price.current.value,
    courseId: courseId,
  };
  const isValid = courseDataChecker(updatedCourseDetails);
  if (!isValid) {
    return setFormEmptyError("Please fill all the details...");
  }
  const formData = new FormData();
  formData.append("updetedCourseDetails", JSON.stringify(updatedCourseDetails));
  formData.append("thumbnail", thumbnail.current.files[0]);
  const res = await axios.patch(`${mainURL}/course-update`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.data) {
    redirect(`/seller-courses/${sellerId}`);
  }
};

export const courseUploadBTN = async (
  courseName,
  Price,
  Dec,
  sellerData,
  thumbnail,
  setProgressBar,
  redirect
) => {
  const courseDetails = {
    courseName: courseName.current.value,
    Price: Price.current.value,
    Dec: Dec.current.value,
    sellerData: sellerData,
  };

  const formData = new FormData();
  formData.append("courseDetails", JSON.stringify(courseDetails));
  formData.append("thumbnail", thumbnail.current.files[0]);

  const token = localStorage.getItem("jwtToken");
  const res = await axios.post(`${mainURL}/course-create`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    onUploadProgress: (e) => {
      const progress = Math.round((e.loaded * 100) / e.total);
      setProgressBar(progress);
    },
  });
  redirect("/course-video-upload");
};

export const DeleteCourseBTN = async (id) => {
  try {
    const token = localStorage.getItem("jwtToken");
    const res = await axios.delete(
      `${mainURL}/delete-course/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(res.data);
  } catch (error) {
    console.log("Error,", error);
  }
};
