import { createContext, useEffect, useState } from "react";

export const VideosContext = createContext()

function VideosProvider ({children}){
   const [videos, setVideos] = useState([])

   // videos[0].videos
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
    useEffect(()=>{
        findVideos()
    },[])

    const shared={
        videos
    } 

    return(
        <VideosContext.Provider value={shared}>
            {children}
        </VideosContext.Provider>
    )
}

export default VideosProvider