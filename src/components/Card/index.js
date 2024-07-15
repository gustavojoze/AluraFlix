import { VideosContext } from "context";
import styles from "./Card.module.css";
import { useContext } from "react";

import MenuLink from "components/MenuLink";

function Card({ changeEstado, image, color, id}) {
  const { searchNewVideo, deleteVideo } = useContext(VideosContext);
  


  return (
    <>
          <div
            className={styles.card}
            style={{ boxShadow: `0px 0px 17px 5px ${color}`, backgroundColor:`${color}` }}
          >
            <MenuLink to={`/video/${id}`}>
              <img src={image} className={styles.imgCard} alt="imagem the card" />
            </MenuLink>
            <div className={styles.crud} >
              <div className={styles.crud_delete} onClick={()=>deleteVideo(id)}>
              <img
                src="/images/trash.png"
                className={styles.imgCrud}
                alt="imagem the trash in card"
              />
              <p>DELETAR</p>
              </div>
              <div className={styles.crud_alter} onClick={() => {
                changeEstado(true) 
                searchNewVideo(id)
                }}>
              <img
                src="/images/pencil.png"
                className={styles.imgCrud}
                alt="imagem the pencil in card"
              />
              <p>ALTERAR</p>
              </div>
            </div>
          </div>
    </>
  );
}

export default Card;
