import axios from 'axios';
import React from 'react'
import { mainURL } from '../../Constants/Constant';
import { useState } from 'react';
import useUserCarts from '../../Hooks/useUserCarts';

export const CartBtn = ({courseId,userId}) => {
      
    const [refresh,setRefresh] = useState(0);

   const cartAddBtn = async () => {
    const token = localStorage.getItem('jwtToken');
        try {
            const res = await axios.post(`${mainURL}/cart`, {courseId,userId}, {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(res.data);
            setRefresh(refresh + 1);
        } catch (error) {
            console.log(error);
        }
   }

   useUserCarts(refresh);

  return (
     <button onClick={cartAddBtn} className="mt-3 bg-[#6d29d1] w-full hover:bg-purple-500 text-white text-sm cursor-pointer font-semibold rounded-md px-7 py-2">
        Go to cart
     </button>
  )
}

export default CartBtn;