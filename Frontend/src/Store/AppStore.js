import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../Slice/UserReducer.js';
const appStore = configureStore({
    reducer:{
        User:UserReducer,
    }
})

export default appStore;