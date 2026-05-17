import { createSlice } from "@reduxjs/toolkit";

const SellerAllCourses = createSlice({
    name:"SellerAllCourses",
    initialState:{
        course:[],
        loading:true,
        error:{}
    },
    reducers:{
        addSellerCourses:(state,action) =>{
            state.course = action.payload;
        },
        setLoading:(state,action) => {
            state.loading = action.payload;
        },
        setError:(state,action) => {
            state.error = action.payload;
        }
    }
})


export const {addSellerCourses,setLoading,setError} = SellerAllCourses.actions;
export default SellerAllCourses.reducer;

