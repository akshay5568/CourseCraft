import React from 'react'
import { Link } from 'react-router';

export const EmptyLearning = () => {
  return (
    <div className='m-50'>
        <div className='bg-gray-200 rounded-md p-3'>
            <div>
                <h1>You have not puchase any course yet.  <Link to={'/'} className='text-blue-600'>Start Buying</Link></h1>
            </div>
        </div>
    </div>
  )
}

export default EmptyLearning;