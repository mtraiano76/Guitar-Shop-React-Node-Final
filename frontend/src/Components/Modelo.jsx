
import React,{useState} from "react"
import "../Components/styles/Modelo.css"


function Modelo(props){
    const{marca,precio,cantidad,imagen} = props
    const[comprar,setComprar] = useState('')
    const handleClick = ()=>{
        setComprar("¡Gracias por su compra!")
    }
    return(
        <div className="contenedor">
            <ul>
                <p>{marca}</p>
                <p>$ {precio}</p>
                <p>Cantidad disponible {cantidad}</p>
                <p>{imagen}</p>
                <button type="button">Detalle</button>
                <button className="producto_button" onClick={handleClick}>Comprar</button>
                <p>{comprar}</p>
               
            </ul>
        </div>
    )
}

export default Modelo

