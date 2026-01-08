import { createSlice } from "@reduxjs/toolkit";


const CourseReducer = createSlice({
    name:"CourseDetails",
    initialState:{
        details:{},
        allCourses:[],
    },
    reducers:{
        addCourseDetails:(state,action) => {
            state.details = action.payload;
        },
        allCoursesForHomePage:(state,action) => {
            state.allCourses = action.payload;   
        }
    }

})

export const {addCourseDetails,allCoursesForHomePage} = CourseReducer.actions;
export default CourseReducer.reducer;