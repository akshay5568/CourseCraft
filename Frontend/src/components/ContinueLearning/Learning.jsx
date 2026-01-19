import React from 'react'
import Header from '../Header/Header';
import EmptyLearning from '../ContinueLearning/EmptyLearning';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import useGetPurchasedUserCourses from '../../Hooks/useGetPurchasedUserCourses';



export const Learning = () => {
    const usersCourses = useSelector(state => state?.User.courses);                      
    console.log(usersCourses)


    if(usersCourses.length == 0) {
         return <div>
             <Header/>
             <EmptyLearning/>
         </div>
    }

  return (
    <div>
        <Header/>
        <div>
            {usersCourses?.length != 0 ? <div className='p-3'>
              <div>{
                usersCourses?.map(course => (
                 <Link>
                
              </Link>
                ))
            }</div>
            </div> : <EmptyLearning/>}
        </div>
    </div>
  )
}
export default Learning;