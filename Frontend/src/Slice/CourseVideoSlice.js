import { createSlice } from "@reduxjs/toolkit";


const CourseVideoSlice = createSlice({
    name:"CourseVideo",
    initialState:{
        videos:[]
    },
    reducers:{
        addCourseVideos:(state,action) => {
            state.videos = action.payload;
            console.log(state.videos)
        }
    }
})


export const {addCourseVideos} = CourseVideoSlice.actions;
export default CourseVideoSlice.reducer;