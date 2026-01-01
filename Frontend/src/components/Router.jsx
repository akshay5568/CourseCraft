
import { Route, Routes } from 'react-router';
import HomePage from './HomePage/HomePage';
import Profile from './Profile/Profile';
import Cart from './Cart/Cart';
import  SignIn  from './SignIn/SignIn';
import SignUp from './SignIn/SignUp';
import SignUpPage from './BeacomeInstructor/SignUpPage';
import SellerHomePage from './BeacomeInstructor/SellerHomePage';
import CourseUploadPage from './BeacomeInstructor/CourseUploadPage';

export const Router = () => {
  return (
     <>
       <Routes>
          <Route path="/" element={<HomePage />}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/cart' element={<Cart/>}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/become-instructor" element={<SignUpPage />} />
            <Route path="/seller-home-page/:id" element={<SellerHomePage />} />
            <Route path="/create-course" element={<CourseUploadPage />} />
       </Routes>
      
     </>
  )
}

export default Router;
