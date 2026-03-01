import { useDispatch } from "react-redux"
import { addVideo } from "../Slice/VideoPlayerVideo";

export const useVideoDeleteForVideoPlayer = () => {
    const dispatch = useDispatch();
    const deleteVideoForVideoPlayer = () => {
       dispatch(addVideo(null));
    }
  return {deleteVideoForVideoPlayer};
}


export default useVideoDeleteForVideoPlayer;