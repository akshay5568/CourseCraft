import React from 'react'
import { useState } from 'react';

export const DeleteSection = () => {

   const [sectionDeletePopUp,setSectionDeltePopUp] = useState(false);


   const sectiondeletePop = () => {
        setSectionDeltePopUp(!sectionDeletePopUp); 
   }

   const deleteSection = () => {
       
   }

  return (
    <div className=''>
        <button onClick={sectiondeletePop} className='text-xs cursor-pointer font-semibold bg-amber-300 p-1 rounded-md'>Delete section</button>
        {sectionDeletePopUp && <div className='absolute w-100 bg-gray-300 mt-3 p-3 rounded-md'>
                  <h1 className='font-semibold'>Are you sure to delete this section?</h1>
                  <div className='flex text-xs font-semibold gap-5 mt-3'>
                      <button onClick={() => setSectionDeltePopUp(false)} className='bg-amber-400 rounded-md p-1 cursor-pointer'>Cancel</button>
                      <button className='bg-amber-400 rounded-md p-1 cursor-pointer'>Delete</button>
                  </div>
              </div>}
    </div>
  )
}
export default DeleteSection;