import React from 'react'
import Header from '../../Header/Header';
import BarChartForCourseRevenue from './BarChartForCourseRevenue';
import ChartForStudents from './ChartForStudents';
import { useParams } from 'react-router';
import SellerHeader from '../SellerHeader';

export const DashBoard = () => {
    const {sellerID} = useParams();
  return (
    <div className=''>
        <SellerHeader/>
        <div className='mt-7'> 
        <div className='w-[50%] m-auto'>
            <BarChartForCourseRevenue sellerID={sellerID}/>
        </div>



        <div className='text-center mt-15'>
            <h1>Total students course wise</h1>
        </div>
         <div className='w-[30%] m-auto text-xl font-extrabold'>
            <ChartForStudents sellerID={sellerID}/>
        </div>
        </div>
    </div>
  )
}
export default DashBoard;