import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/coursecraft-high-resolution-logo-transparent.png";
import { Link } from "react-router";
import { FaOpencart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import {useSelector} from 'react-redux';
const Header = () => {
  const userData = useSelector(state => state.User);
  console.log(userData.data)
  return (
    <div className="flex w-full items-center justify-between p-3 h-20  border-b border-gray-200">
      <div className="w-[20%] flex items-center gap-10">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <span>Explore</span>
      </div>

      <SearchBar />
       {userData.data?.email ? <div className="flex gap-5 items-center">
        <Link to={"/cart"}>
          <div className="hover:bg-purple-300 rounded-md p-3">
            <FaOpencart className="text-xl " />
          </div>
        </Link>

        <Link to={"/profile/87"}>
          <div className="hover:bg-purple-300 rounded-md p-3">
            <CgProfile className="text-xl" />
          </div>
        </Link>
      </div> : <div className="flex gap-5 items-center">
        <Link to={"/signin"}>
           <span className="p-2 px-5 rounded-md  hover:bg-purple-400 bg-purple-300">Login</span>
        </Link>

        <Link to={"/signup"}>
                <span className="p-2 px-5 rounded-md hover:bg-purple-400 bg-purple-300">SignUp</span>           
        </Link>
      </div>}
    </div>
  );
};

export default Header;
