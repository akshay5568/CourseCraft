import React, { useRef, useState } from 'react'
import SellerHeader from './SellerHeader';
import axios from 'axios';
import { mainURL } from '../../Constants/Constant';
import { useSelector } from 'react-redux';

export const CourseUploadPage = () => {
    const sellerData = useSelector(state => state.Seller.sellerData);
    const courseName = useRef();
    const Price = useRef();
    const Dec = useRef();
    const thumbnail = useRef();

    const [progressBar,setProgressBar] = useState();

    const submitBTN = async () => {
        const courseDetails = {
            courseName:courseName.current.value,
            Price:Price.current.value,
            Dec:Dec.current.value,
            sellerData:sellerData
        }

        const formData = new FormData();
        formData.append(courseDetails);
        formData.append(thumbnail.current.files[0]); 

        const token = localStorage.getItem("jwtToken");
            const res = await axios.post(`${mainURL}/course-create`,formData, {
                headers:{
                    Authorization: `Bearer ${token}`
                },
                onUploadProgress:(e) =>{
                    const progress = Math.round(
                        (e.loaded * 100) / e.total
                    )
                    setProgressBar(progress);
                }
            })
         console.log(res.data);
    }

  return (
    <div className='w-full'>
        <SellerHeader/>
        <div className='flex  border '>
             <form onSubmit={(e) => e.preventDefault()} className='m-auto'>
                <input ref={courseName} type="text" placeholder='Course Name' /><br />
                <input ref={Price} type="Number" placeholder='Price' /><br />
                <input ref={Dec} type="text" placeholder='Description' /><br />
                <input type="file" ref={thumbnail} placeholder='Thubmnail' name='thumbnail' /><br />
             <button onClick={submitBTN}>{progressBar ? `Uploaded ${progressBar}%` : "Upload"}</button>
             </form>
        </div>
    </div>
  )
}

export default CourseUploadPage;