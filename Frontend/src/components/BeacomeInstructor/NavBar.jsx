import { MdManageAccounts } from "react-icons/md";
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../Hooks/useLogout";
import { useSelector } from "react-redux";
import axios from "axios";
import { mainURL } from "../../Constants/Constant";
import { useState } from "react";
import PopUpSellerDelete from "./PopUpSellerDelete";



export const NavBar = () => {
  const {logoutHandle} = useLogout();
  const sellerData = useSelector(state => state.Seller?.sellerData);
  const token = localStorage.getItem("jwtToken");

  const [isPop,setPop] = useState(false);
  
  const sellerAccountDelete = async () => {
      const res = await axios.post(`${mainURL}/delete-seller-account`, sellerData, {
        headers:{
          Authorization : `Brearer ${token}`
        }
      })
      if(res.data == true) {
         setPop(!isPop);
      }
  }

  return (
    <div className='top-0.5 w-15 bg-black text-white'>
         <div className='text-2xl pl-4 pt-5'>
               <Link className=''><MdManageAccounts/></Link>
               <button onClick={sellerAccountDelete}><MdDelete/></button>
               <button onClick={logoutHandle}><CiLogout/></button>    
         </div>

         {isPop && <PopUpSellerDelete setPop={setPop}/>}
    </div>
  )
}


export default NavBar;
