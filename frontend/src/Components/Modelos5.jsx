import React,{useState,useEffect} from "react"
import Modelo from "./Modelo"
import {getAllModelos5} from '../Services/modelos5Services'
function Modelos5(){
    const [loading,setLoading] = useState(true)
    const [modelos,setModelos] = useState([])
    const [buscar,setBuscar] = useState('')

    useEffect(
        ()=>{
            const request = async ()=>{
                try{
                    const response = await getAllModelos5()
                    setModelos(response.results)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    }
                }
                request()

        },
        []
    )

    useEffect(
        ()=>{
            console.log("ComponentDidUpdate")
            setModelos([
                {
                    marca:"Marca: Gibson",
                    estilo:"Modelo: Flying V",
                    descripcion:"Descripcion: La Gibson Flying V es una guitarra eléctrica popular. Sacada al mercado en 1958 por Gibson, su principal característica es su diseño en forma de flecha. Es muy utilizada por guitarristas de heavy metal.",
                    precio:"Precio: $ 235.000",
                    sku:"SKU: GIBFLY",
                    cantidad:"Cantidad: 10"
                },
            ])
        },
        [buscar]
    )

    const handleClick = ()=>{
        setModelos([
            {
                marca:"Marca: Gibson",
                    estilo:"Modelo: Explorer",
                    descripcion:"Descripcion: Gibson Explorer, o X-plorer (desde 2002) es una guitarra eléctrica de cuerpo macizo fabricada por Gibson. Fue presentada en 1958, como desarrollo de un prototipo previo denominado «Futura». Se pretendía con ella introducir en el mercado un modelo de líneas radicales e inspiración futurista, como ocurría con sus hermanas, la Flying V y la Gibson Moderne. Inicialmente fracasó y dejó de fabricarse en 1959. Sin embargo, en 1975, Gibson comienza la reedición de la Explorer debido al éxito de diseños similares de otras compañías.",
                    precio:"Precio: $ 253.000",
                    sku:"SKU: GIBEXP",
                    cantidad:"Cantidad: 9"
            }
        ])
    }

    if(loading){
        return(<div>Cargando...</div>)
    }else{
        const titulo = "Listado de productos"
        return(
            <div>
            <h2>{titulo}</h2>
            {modelos.map(modelo=><Modelo marca={modelo.title} precio={modelo.price} cantidad={modelo.available_quantity} imagen={modelo.picture} />)}
            <button onClick={handleClick}>Filtrar</button>
            <button onClick={()=>setBuscar('gibson')}>Buscar</button>
        </div>
        )
    }


}

export default Modelos5