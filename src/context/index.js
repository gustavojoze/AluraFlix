import { createContext, useEffect, useState } from "react";

export const VideosContext = createContext()

function VideosProvider ({children}){
   const [videos, setVideos] = useState([])
    const [actualVideo, setActualVideo] = useState(null)

    const searchNewVideo = async (id) => {
        const videoFound = await fetch(`https://669179aa26c2a69f6e8fdad7.mockapi.io/videos/${id}`);
        const video = await videoFound.json();
        setActualVideo(video)
    }
    
    const filterVideos = (videos)=>{
        if(videos){
            return[
                {category:"frontend",  videos:videos.filter(video => video.category=="frontend")},
                {category:"backend",  videos:videos.filter(video => video.category=="backend")},
                {category:"mobile",  videos:videos.filter(video => video.category=="mobile")}
            ]
        } return []
    }
    const findVideos = async () => {
    const api = await fetch("https://669179aa26c2a69f6e8fdad7.mockapi.io/videos")
    const data = await api.json()
    const videos = filterVideos(data)
    setVideos(videos) 
}
const deleteVideo = async (id) => {
    try {
      await fetch(`https://669179aa26c2a69f6e8fdad7.mockapi.io/videos/${id}`, { method: "DELETE" });
      setVideos((prevVideos) => {
        const updatedVideos = prevVideos.map((category) => ({
          ...category,
          videos: category.videos.filter((video) => video.id !== id),
        }));
        return updatedVideos.filter((category) => category.videos.length > 0);
      });
    } catch (error) {
      console.error("Erro ao deletar vídeo:", error);
    }
  };
    useEffect(()=>{
        findVideos()
    },[])

    const shared={
        videos,
        searchNewVideo,
        actualVideo,
        deleteVideo,
        findVideos
    } 

    return(
        <VideosContext.Provider value={shared}>
            {children}
        </VideosContext.Provider>
    )
}

export default VideosProvider