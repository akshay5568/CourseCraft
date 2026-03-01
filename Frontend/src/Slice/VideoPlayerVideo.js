import { createSlice } from "@reduxjs/toolkit";



const VideoPlayerVideo = createSlice({
    name:"videoPlayerVideo",
    initialState:{
        videoLink:{}
    },
    reducers:{
        addVideo:(state,action) => {
             state.videoLink = action.payload
        }
    }
})

export const {addVideo} = VideoPlayerVideo.actions;
export default VideoPlayerVideo.reducer;