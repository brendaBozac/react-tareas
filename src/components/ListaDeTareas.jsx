import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario.jsx";
import '../hojas-de-estilos/ListaDeTareas.css'
import Tarea from "./Tarea.jsx"

/* las etiquetas vacias son fragmentos en react */
function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    /* estamos comprobando que la cadena no esta vacia primero
    trim es un metodo para qitar espacios vacios al comienzo y final de la string */
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      /* aqui vamos a mostrar la tarea nueva y las anteriores, con ...spred desglosamos las tareas antiguas individuales
      como objetos del array */
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);

    }
  }

  /* map necesita que retornemos un valor */
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) => 
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>

    </>
  )
}

export default ListaDeTareas;