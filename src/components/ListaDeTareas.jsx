import React from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilos/ListaDeTareas.css'

/* las etiquetas vacias son fragmentos en react */
function ListaDeTareas() {
  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
          LISTA DE TAREAS
      </div>

    </>
  )
}

export default ListaDeTareas;