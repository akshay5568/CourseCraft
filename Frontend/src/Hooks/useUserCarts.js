import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';  
import { mainURL } from '../Constants/Constant';
import { useEffect } from 'react';
import { addCarts } from '../Slice/UserCarts';

export const useUserCarts = (refresh) => {  
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state?.User?.data);
  const getUserCarts = async () => {
    const token = localStorage.getItem('jwtToken');
     try {
         const res = await axios.get(`${mainURL}/carts/user?id=${userDetails._id}`, {      
            headers:{
               Authorization:`Bearer ${token}`
            }
         })
         dispatch(addCarts(res.data));
         console.log(res.data)
     } catch (error) {
        console.log(error)
     }
  }

  useEffect(() => {
     getUserCarts();
  },[userDetails,refresh])
  return null;
}

export default useUserCarts;