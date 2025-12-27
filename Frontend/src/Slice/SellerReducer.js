import { createSlice } from "@reduxjs/toolkit";


const SellerReducer = createSlice({
    name:"Seller",
    initialState:{
        sellerData:{},
    },
    reducers:{
        addSellerData:(state,action) => {
            state.sellerData = action.payload;
            console.log(state.sellerData);
        }
    }
})

export const {addSellerData} = SellerReducer.actions;
export default SellerReducer.reducer;