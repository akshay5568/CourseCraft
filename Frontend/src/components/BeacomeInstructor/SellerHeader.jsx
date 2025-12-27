
import ProfileTag from '../HomePage/ProfileTag';
import { Link } from 'react-router';
import logo from "../../assets/coursecraft-high-resolution-logo-transparent.png";


export const SellerHeader = () => {
  return (
    <div className='h-15  flex justify-between'>
        <div className='w-15 bg-black'>
            <img className='text-white' src={logo} alt="" />
        </div>
        <div className='p-5 flex gap-8 font-extralight text-sm'>
             <Link className=' hover:bg-purple-200 hover:text-purple-400 px-2 rounded-md ' to={'/'}>Student Panel</Link>
             <Link to={'/profile'}><ProfileTag isProfile={true}/></Link>
        </div>
    </div>
  )
}


export default SellerHeader;