import { Link,useLocation } from "react-router-dom";
import styles from "./ButtonLink.module.css"


function ButtonLink({children, to}){
    const location = useLocation();
    return(
        <Link style={{ textDecoration: 'none' }} className={`
            ${styles.button}
            ${location.pathname === to ? styles.buttonNavigate : ""}
        `} to={to} > 
        {children}
        </Link>
        
    )
}
export default ButtonLink




