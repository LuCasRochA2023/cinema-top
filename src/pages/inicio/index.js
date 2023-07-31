import Banner from "components/banner"
import Card from "components/card"
import Titulo from "components/titulo"
import styles from "./Inicio.module.css"
import { useEffect, useState } from "react"
const Inicio=()=>{
    const [videos,setVideos]=useState([])

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/LuCasRochA2023/api-cine/videos')
            .then(resposta=>resposta.json())
            .then(dados=>{
                setVideos(dados)
            })
    },[])
    return (
        <>
            
            <Banner imagem="home"/>
            <Titulo>
                <h1> Um lugar para guardar seus livros e filmes
                </h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video)=>{
                    return <Card  {...video} key={video.id}/>
                })}
            </section>

           
        </>
        
    )
}
export default Inicio