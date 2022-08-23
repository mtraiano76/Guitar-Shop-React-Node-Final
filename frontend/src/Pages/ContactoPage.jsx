import "./styles/ContactoPage.css"
import { useState } from "react";
import axios from "axios";

const ContactoPage = (props) => {

    const initialForm = {
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg("");
        setSending(true)
        const response = await axios.post("http://localhost:3000/api/contacto", formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre"></label>
                        <input type="text" placeholder="Nombre y Apellido" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="email"></label>
                        <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="telefono"></label>
                        <input type="text" placeholder="Telefono" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="mensaje"></label>
                        <textarea placeholder="Ingrese su mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}


            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 12345678</li>
                    <li>Email: contacto@guitarshop.com</li>
                    <li>Facebook:</li>
                    <li>Instagram:</li>
                </ul>
            </div>
        </main>
    )
    }
            export default ContactoPage;