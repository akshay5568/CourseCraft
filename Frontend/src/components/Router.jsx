
import { Route, Routes } from 'react-router';
import HomePage from './HomePage/HomePage';
import Profile from './Profile/Profile';
import Cart from './Cart/Cart';
import  SignIn  from './SignIn/SignIn';
import SignUp from './SignIn/SignUp';

export const Router = () => {
  return (
     <>
   
       <Routes>
          <Route path="/" element={<HomePage />}/>
           <Route path='/profile/:id' element={<Profile/>}/>
           <Route path='/cart' element={<Cart/>}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
       </Routes>
      
     </>
  )
}

export default Router;
