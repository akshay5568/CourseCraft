import { createSlice } from "@reduxjs/toolkit";


const CourseVideoSlice = createSlice({
    name:"CourseVideo",
    initialState:{
        videos:{}
    },
    reducers:{
        addCourseVideos:(state,action) => {
            state.videos = action.payload;
        }
    }
})


export const {addCourseVideos} = CourseVideoSlice.actions;
export default CourseVideoSlice.reducer;