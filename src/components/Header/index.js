import ButtonLink from "components/ButtonLink"
import styles from "./Header.module.css"
import MenuLink from "components/MenuLink"


function Header(){
    return(
    <header className={styles.header}>
        <MenuLink to={"/"}>
       <img src="/images/logo.png" alt="Logo do header" className={styles.image}/>
       </MenuLink>
        <div className={styles.divButton}>
            <ButtonLink to={"/"}>
                Home
            </ButtonLink>
            <ButtonLink to={"/form"}>
                Novo Video
            </ButtonLink>
        </div>
    </header>
    )
}
export default Header