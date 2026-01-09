
import { Route, Routes } from 'react-router';
import HomePage from './HomePage/HomePage';
import Profile from './Profile/Profile';
import Cart from './Cart/Cart';
import  SignIn  from './SignIn/SignIn';
import SignUp from './SignIn/SignUp';
import SignUpPage from './BeacomeInstructor/SignUpPage';
import SellerHomePage from './BeacomeInstructor/SellerHomePage';
import CourseUploadPage from './BeacomeInstructor/CourseUploadPage';
import SellerCoursesAll from './BeacomeInstructor/SellerCoursesAll';
import SellerVideoUpload from './BeacomeInstructor/SellerVideoUpload';
import CourseEditPage from './BeacomeInstructor/CourseEditPage';
import UploadVideos from './BeacomeInstructor/UploadVideos';
import FullCoursePage from './CourseOverview/FullCoursePage';

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
            <Route path="/seller-courses/:id" element={<SellerCoursesAll />} />
            <Route path="/course-video-upload" element={<SellerVideoUpload />} />
            <Route path="/course-edit/:id" element={<CourseEditPage />} />
            <Route path="/upload-course-videos/:id" element={<UploadVideos />} />
            <Route path="/course/:id" element={<FullCoursePage />} />
       </Routes>
      
     </>
  )
}

export default Router;
