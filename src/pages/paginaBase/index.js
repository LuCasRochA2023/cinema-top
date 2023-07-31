const { default: Cabecalho } = require("components/cabecalho")
const { default: Container } = require("components/container")
const { default: FavoritosProvider } = require("components/contexto/favoritos")
const { default: Rodape } = require("components/rodape")
const { Outlet } = require("react-router-dom")

const PaginaBase=()=>{
    return (
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}
export default PaginaBase