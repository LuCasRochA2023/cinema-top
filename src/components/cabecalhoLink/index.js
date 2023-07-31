import { Link } from "react-router-dom"
import styles from "./cabecalhoLink.module.css"
const CabecalhoLink=({children,url})=>{
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}
export default CabecalhoLink