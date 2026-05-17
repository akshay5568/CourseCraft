


import React, { useEffect } from 'react'
import { addSellerCourses, setError, setLoading } from '../../Slice/SellerAllCourses';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { mainURL } from '../../Constants/Constant';

export const useGetAllSellerCourses = (id) => {

  const dispatch = useDispatch();

     const getCourses = async () => {
        try {
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
        dispatch(addSellerCourses(res.data));
        } catch (error) {
           dispatch(setError(error));
        }
        finally{
           dispatch(setLoading(false));
        }
      };


      useEffect(() => {
            getCourses();
      }, [])
  return null;
}
export default useGetAllSellerCourses;