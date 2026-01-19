import { createSlice } from "@reduxjs/toolkit";


const UserCarts = createSlice({
    name:"Carts",
    initialState:{
        carts:[],
    },
    reducers:{
        addCarts:(state,action) => {
             state.carts = action.payload;
        },
        
    }
})


export const {addCarts} = UserCarts.actions;
export default UserCarts.reducer;