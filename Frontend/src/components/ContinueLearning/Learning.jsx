import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import EmptyLearning from '../ContinueLearning/EmptyLearning';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import useGetPurchasedUserCourses from '../../Hooks/useGetPurchasedUserCourses';



export const Learning = () => {
    const usersCourses = useSelector(state => state?.User.courses || []);                      
    // const [usersCourses,setUserCourses] = useState([]); 
    
    // useEffect(() => {
    //     setUserCourses(userCourses);
    // },[userCourses]) 

  if(!usersCourses){
      return <div><Header/>Loading....</div>
  }  

  return (
    <div>
        <Header/>
        <div>
            {usersCourses?.length != 0 ? <div className='p-3'>
              <div className='flex gap-3 flex-wrap'>{
                usersCourses?.map(course => (
                 <Link key={course?._id} to={`/watching-videos/${course?._id}`}>
                      <div  className='w-75 h-50 p-1'>
                          <img className='w-full h-40 rounded-md' src={course.courseID.thubmnailUrl} alt="" />
                          <div className='mt-1'>
                              <h1 className='font-bold '>{course.courseID.courseName.substring(0,30) + "..."}</h1>
                          </div>
                      </div>
                 </Link>
                ))
            }</div>
            </div> : <EmptyLearning/>}
        </div>
    </div>
  )
}
export default Learning;