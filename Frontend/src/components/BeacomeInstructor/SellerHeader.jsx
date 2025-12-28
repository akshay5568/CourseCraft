
import ProfileTag from '../HomePage/ProfileTag';
import { Link } from 'react-router';
import logo from "../../assets/coursecraft-high-resolution-logo-transparent.png";
import { useSelector } from 'react-redux';
import useRefreshSellerHandle from '../../Hooks/useRefreshSellerHandle';

export const SellerHeader = () => {
  useRefreshSellerHandle();
  return (
    <div className='h-15  flex items-center shadow-xl justify-between'>
        <div className='pr-200 p-3'>
           <img src={logo} alt="logo" className='w-50 cursor-pointer'/>
        </div>
        <div className='p-5 flex gap-8 font-extralight text-sm'>
             <Link className=' hover:bg-purple-200 hover:text-purple-400 px-2 rounded-md ' to={'/'}>Student Panel</Link>
             <Link to={'/profile'}><ProfileTag isProfile={true}/></Link>
        </div>
    </div>
  )
}


export default SellerHeader;