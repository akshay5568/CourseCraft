import { useParams } from "react-router";
import Header from "../Header/Header";


export const Profile= () => {

  const {id} = useParams();
  console.log(id);
  return (
    <div>
      <Header/>
      Profile : {id}
    </div>
  )
}



export default Profile;