import { createSlice } from "@reduxjs/toolkit";


const UserReducer = createSlice({
    name:"User",
    initialState:{
        data:{},
        courses:[],
    },
    reducers:{
        addUserData : (state,action) => {
            state.data = action.payload;
        },
        addUserPurchasedCourses:(state,action) => {
            state.courses = action.payload;
        }
    }
})

export const {addUserData,addUserPurchasedCourses} = UserReducer.actions;
export default UserReducer.reducer;