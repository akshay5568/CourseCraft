
import './App.css'
import HomePage from './components/HomePage/HomePage.jsx';
import Router from './components/Router'
import useGetCourseData from './Hooks/ForSeller/useGetCourseData';
import useGetAllCourses from './Hooks/useGetAllCourses';
import useGetPurchasedUserCourses from './Hooks/useGetPurchasedUserCourses.js';
import useRefreshLoginHandle from './Hooks/useRefreshLoginHandle'
import useRefreshSellerHandle from './Hooks/useRefreshSellerHandle';
import useUserCarts from './Hooks/useUserCarts';

function App() {
    useRefreshLoginHandle();
    useRefreshSellerHandle();
    useGetAllCourses();
    useUserCarts();
    useGetPurchasedUserCourses();
  return (
      <div className='w-full'>
          <Router/>
      </div>
  )
}

export default App
