import { useSelector } from "react-redux";

export const ProfileTag = ({isProfile}) => {
  console.log(isProfile)
  const user = useSelector((state) => state.User);
  return (
    <div className="pl-3">
      <div className="flex gap-5">
        <div>
          <span className="w-20 text-white text-xl bg-[#16161d] px-5 py-4 rounded-full">   
            {user.data?.name?.substring(0, 1)}
          </span>
        </div>
        <div>
           {isProfile ? <span>{user.data?.name}</span> : <span className="text-2xl font-semibold">
            Welcome back, {user.data?.name}
          </span>}
        </div>
      </div>
    </div>
  );
};

export default ProfileTag;
