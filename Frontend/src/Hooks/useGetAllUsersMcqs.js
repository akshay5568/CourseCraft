import axios from "axios";
import React, { useEffect } from "react";
import { mainURL } from "../Constants/Constant";

export const useGetAllUsersMcqs = (
  setLoading,
  setAllUsersMcqs,
  refresh,
  userID,
  courseID
) => {
  const getAllUsersMcq = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("jwtToken");
      const getData = await axios.get(
        `${mainURL}/users-mcq/?userID=${userID}&courseID=${courseID}`,    
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllUsersMcqs(getData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(!userID || !courseID) return;
    getAllUsersMcq();
  }, [refresh, userID, courseID]);
};
export default useGetAllUsersMcqs;
