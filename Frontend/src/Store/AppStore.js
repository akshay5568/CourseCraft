import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../Slice/UserReducer.js';
import SellerReducer from '../Slice/SellerReducer.js';
import CourseReducer from '../Slice/CourseDetailsReducer.js';
import CourseVideo from '../Slice/CourseVideoSlice.js';
import UserCarts from '../Slice/UserCarts.js';

const appStore = configureStore({
    reducer:{
        User:UserReducer,
        Seller:SellerReducer,
        CourseDetails:CourseReducer,
        CourseVideo:CourseVideo,
        Carts:UserCarts
    }
})

export default appStore;