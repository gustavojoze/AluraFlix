import Header from "components/Header"
import styles from "./Page.module.css"

function PageVideo(){
    return(
    <>
    <Header/>
    <div className={styles.pageVideo_container}>
    <h1>Oi tudo bem</h1>
    <iframe width="1000" height="500" src="https://www.youtube.com/embed/OoNHteiKYfs" title="COMO SAIR DE DEV JR. PRA DESENVOLVEDOR PLENO" frameborder="0" allowfullscreen></iframe>
    <p>blblbalbljfdfoiasdhfasdifoasdifojfasdpfasijofpsijfsfpdjfsdoijdfopsdjifojsadfjsaiopfsfisgshgsgsao´gashgoiapighasofgjasfojasdf</p>
    </div>
    </>
    )
}
export default PageVideo