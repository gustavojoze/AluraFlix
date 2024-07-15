import styles from "./Banner.module.css"

function Banner() {
    return (
        <section className={styles.banner}>
            
            <div className={styles.texts}>
                <h1>FRONT END</h1>
                <div className={styles.texts_text}>
                    <h1>Front End</h1>
                    <p> Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
                </div>
            </div>
            <img src="/images/imageBanner.png" alt="banner background image" className={styles.imageBanner} />
        </section>
    )
}
export default Banner