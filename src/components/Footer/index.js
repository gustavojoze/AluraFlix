import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
            <img src="/images/logo.png" className={styles.imgFooter}/>
        </footer>
    )
}

export default Footer