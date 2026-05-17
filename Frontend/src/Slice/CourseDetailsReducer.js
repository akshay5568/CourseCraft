import { createSlice } from "@reduxjs/toolkit";


const CourseReducer = createSlice({
    name:"CourseDetails",
    initialState:{
        details:{},
        allCourses:[],
        loading:true,
    },
    reducers:{
        addCourseDetails:(state,action) => {
            state.details = action.payload;
        },
        allCoursesForHomePage:(state,action) => {
            state.allCourses = action.payload;   
        },
        setLoading:(state,action) => {
            state.loading = action.payload;
        }
    }

})

export const {addCourseDetails,allCoursesForHomePage,setLoading} = CourseReducer.actions;
export default CourseReducer.reducer;