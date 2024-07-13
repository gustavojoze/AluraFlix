import { VideosContext } from "context";
import styles from "./Card.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MenuLink from "components/MenuLink";

function Card({ mudandoEstado, image, color }) {
  const { videos } = useContext(VideosContext);

  return (
    <>
          <div
            className={styles.card}
            style={{ boxShadow: `0px 0px 17px 5px ${color}`, backgroundColor:`${color}` }}
          >
            <MenuLink to={"video"}>
              <img src={image} className={styles.imgCard} alt="imagem the card" />
            </MenuLink>
            <div className={styles.crud}>
              <img
                src="/images/trash.png"
                className={styles.imgCrud}
                alt="imagem the trash in card"
              />
              <p>DELETAR</p>
              <img
                src="/images/pencil.png"
                className={styles.imgCrud}
                alt="imagem the pencil in card"
                onClick={() => mudandoEstado(true)}
              />
              <p>ALTERAR</p>
            </div>
          </div>
    </>
  );
}

export default Card;
