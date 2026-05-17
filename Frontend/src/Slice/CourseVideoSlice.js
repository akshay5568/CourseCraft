import { createSlice } from "@reduxjs/toolkit";


const CourseVideoSlice = createSlice({
    name:"CourseVideo",
    initialState:{
        videos:[],
        loading:true
    },
    reducers:{
        addCourseVideos:(state,action) => {
            state.videos = action.payload;
        },
        setLoading:(state,action) => {
            state.loading = action.payload;
        }
    }
})


export const {addCourseVideos} = CourseVideoSlice.actions;
export default CourseVideoSlice.reducer;