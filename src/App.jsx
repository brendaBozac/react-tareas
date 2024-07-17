import { useState } from 'react'
import './App.css'
import logoFreeCodeCamp from '../src/img/freecodecamp-logo-tareas.png'
import ListaDeTareas from './components/ListaDeTareas.jsx'

function App() {


  return (
    <>
      <div className='aplicacion-tareas'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
          src={logoFreeCodeCamp}
          className='freecodecamp-logo' 
          alt="logo de freecodecamp" 
          />
        </div>

        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </>

 
  )
}

export default App
