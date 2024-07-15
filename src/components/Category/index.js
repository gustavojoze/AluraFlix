import styles from "./Category.module.css"
import Card from "../Card"
import { useContext } from "react"
import { VideosContext } from "context"

function Category({changeFormModal}){
    const {videos} = useContext(VideosContext)
  
  
    return(
    <>
       
        {videos.map((video)=>{
       return <section className={styles.category}>
            <div className={styles.categoryContainer}>
                <h1 className={`${styles.category_title} ${styles[`category_title_${video.category}`]}`}>{video.category}</h1>
                <div className={styles.category_Card}>
                    {video.videos.map(card=>(                     
                         <Card key={card.id} id={card.id} image={card.image} changeEstado={changeFormModal} color={card.colors}/>
                        ))} 
                </div>
            </div>      
              
        </section>
    })}
    </>
    )
}

export default Category