import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../Slice/UserReducer.js';
import SellerReducer from '../Slice/SellerReducer.js';
import CourseReducer from '../Slice/CourseDetailsReducer.js';
import CourseVideo from '../Slice/CourseVideoSlice.js';
import UserCarts from '../Slice/UserCarts.js';
import VideoPlayerVideo from '../Slice/VideoPlayerVideo.js';
import SellerAllCourses from '../Slice/SellerAllCourses.js';

const appStore = configureStore({
    reducer:{
        User:UserReducer,
        Seller:SellerReducer,
        CourseDetails:CourseReducer,
        CourseVideo:CourseVideo,
        Carts:UserCarts,
        videoPlayerVideo:VideoPlayerVideo,
        SellerAllCourses:SellerAllCourses
    }
})

export default appStore;