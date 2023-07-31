import Banner from "components/banner"
import Titulo from "components/titulo"
import styles from "./Favoritos.module.css"
import Container from "components/container"
import { useFavoriteContext } from "components/contexto/favoritos"
import Card from "components/card"
const Favoritos=()=>{
    const {favorito}=useFavoriteContext()
    return (
        <>
            <Banner imagem="Favoritos"/>
            <Titulo >
                <h1  >Meus Favoritos
                    </h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav)=>{
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
            <Container/>
        </>
    )
}
export default Favoritos