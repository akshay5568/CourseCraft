import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../Slice/UserReducer.js';
import SellerReducer from '../Slice/SellerReducer.js';
const appStore = configureStore({
    reducer:{
        User:UserReducer,
        Seller:SellerReducer,
    }
})

export default appStore;