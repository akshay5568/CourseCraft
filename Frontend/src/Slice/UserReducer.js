import { createSlice } from "@reduxjs/toolkit";


const UserReducer = createSlice({
    name:"User",
    initialState:{
        data:{}
    },
    reducers:{
        addUserData : (state,action) => {
            state.data = action.payload;
        }
    }
})

export const {addUserData} = UserReducer.actions;
export default UserReducer.reducer;