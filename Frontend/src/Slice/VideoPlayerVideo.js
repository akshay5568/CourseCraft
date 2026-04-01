import { createSlice } from "@reduxjs/toolkit";



const VideoPlayerVideo = createSlice({
    name:"videoPlayerVideo",
    initialState:{
        videoLink:{}
    },
    reducers:{
        addVideo:(state,action) => {
             state.videoLink = action.payload
        },
        addVideoDescription:(state,action) => {
            state.videoDescription = action.payload;
        }
    }
})

export const {addVideo,addVideoDescription} = VideoPlayerVideo.actions;
export default VideoPlayerVideo.reducer;