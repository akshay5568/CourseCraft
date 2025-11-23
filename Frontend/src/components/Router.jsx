
import { Route, Routes } from 'react-router';
import HomePage from './HomePage/HomePage';
import Profile from './Profile/Profile';
import Cart from './Cart/Cart';

export const Router = () => {
  return (
     <>
       <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/profile/:id' element={<Profile/>}/>
           <Route path='/cart' element={<Cart/>}/>
       </Routes>
     </>
  )
}

export default Router;
