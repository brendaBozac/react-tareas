import React, { useState } from "react";
import '../hojas-de-estilos/TareaFormulario.css';
import {v4 as uuidv4} from "uuid";

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value); /* para extraer el valor del campo de texto q ingreso el usuario */
    }

    const manejarEnvio = e => {
        /* para no volver a cargar toooda la aplicacion, solo los cambios, usamos preventDefault */
        e.preventDefault();
        console.log('enviando formulario...');
        
        /* usamos el paquete uuid para crear identificadores unicos,
        lo instalamos en la consolada npm install uuid, y en nuesrtro archivo lo tenemos que importar */
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);

    }
    return (
        <form 
            className="tarea-formulario"
            /* onsubmit es un tipo de evento, como onchange, y onclick */
            onSubmit={manejarEnvio}>
            <input 
            className="tarea-input"
            type="text"
            placeholder="Escribe una Tarea" 
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario;