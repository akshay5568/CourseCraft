import { createSlice } from "@reduxjs/toolkit";


const CourseReducer = createSlice({
    name:"CourseDetails",
    initialState:{
        details:{}
    },
    reducers:{
        addCourseDetails:(state,action) => {
            state.details = action.payload;
        }
    }

})

export const {addCourseDetails} = CourseReducer.actions;
export default CourseReducer.reducer;