import { createSlice } from "@reduxjs/toolkit";

const SellerAllCourses = createSlice({
    name:"SellerAllCourses",
    initialState:{
        course:[]
    },
    reducers:{
        addSellerCourses:(state,action) =>{
            state.course = action.payload;
        }
    }
})


export const {addSellerCourses} = SellerAllCourses.actions;
export default SellerAllCourses.reducer;

