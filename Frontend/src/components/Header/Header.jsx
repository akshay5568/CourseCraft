import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/coursecraft-high-resolution-logo-transparent.png";
import { Link } from "react-router";
import { FaOpencart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between p-3 h-20  border-b border-gray-200">
      <div className="w-[20%] flex items-center gap-10">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <span>Explore</span>
      </div>

      <SearchBar />
      <div className="flex gap-5 items-center">
        <Link to={"/cart"}>
          <div className="hover:bg-[#6d29d253] rounded-md p-3">
            <FaOpencart className="text-xl " />
          </div>
        </Link>

        <Link to={"/profile/87"}>
          <div className="hover:bg-[#6d29d249] rounded-md p-3">
            <CgProfile className="text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
