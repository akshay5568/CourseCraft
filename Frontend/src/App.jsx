
import './App.css'
import Router from './components/Router'
import useGetCourseData from './Hooks/ForSeller/useGetCourseData';
import useGetAllCourses from './Hooks/useGetAllCourses';
import useRefreshLoginHandle from './Hooks/useRefreshLoginHandle'
import useRefreshSellerHandle from './Hooks/useRefreshSellerHandle';
import useUserCarts from './Hooks/useUserCarts';

function App() {
    useRefreshLoginHandle();
    useRefreshSellerHandle();
    useGetAllCourses();
    useUserCarts();
  return (
      <div>
          <Router/>
      </div>
  )
}

export default App
