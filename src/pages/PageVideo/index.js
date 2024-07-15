import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { VideosContext } from "context";
import styles from "./Page.module.css";

function PageVideo() {
  const { id } = useParams();
  const { searchNewVideo, actualVideo } = useContext(VideosContext);

  useEffect(() => {
    searchNewVideo(id);
  }, [id, searchNewVideo]);

  return (
    <div className={styles.pageVideo_container}>
      {actualVideo ? (
        <>
          <h1>{actualVideo.title}</h1>
          <iframe
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${actualVideo.url.split("=")[1]}`}
            title={actualVideo.title}
            allowFullScreen
          ></iframe>
          <p>{actualVideo.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PageVideo;