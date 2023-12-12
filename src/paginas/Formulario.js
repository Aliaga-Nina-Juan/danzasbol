import React from 'react'
import '../hojas-de-estilo/Formulario.css'
import Respuesta from '../components/Respuestas'


const formulario = () => {
  return (
    
      
        
      <div className='row-100'>
        <div className='datos row-100'>
            <div className='entrada-datos col-6'>

                <div className='wrapper'>
                  <h1> Bienvenido </h1>
                  <div className='input-box'><input type='text' placeholder='Ingrese su nombre' id='nombre'/></div>
                
                  <div className='input-box'><input type='text' placeholder='Ingrese su cedula de identidad' id='cedula'/></div>
                  
                  <div className='input-box'><input type='text' placeholder='Ingrese su año de nacimiento' id='año'/></div>
                  
                  <div className='input-box'><input type='text' placeholder='Ingrese el nombre de su universidad' id='universidad'/></div>

                  <div className='input-box'><input type='text' placeholder='Ingrese la facultad en la que se encuentra' id='facultad'/></div>

                  <div className='input-box'><input type='text' placeholder='Ingrese el nombre de su carrera' id='carrera'/></div>
                  <button type='submit' className='btn' onClick={()=>{Respuesta()}}>Comprobar</button>

                </div>
            </div> 



            <div className='salida-datos col-6'>
              <div className='col'>
                <h3>¡Hola!</h3>
                <div className='input-box1'><input type='text'  id='salida-nombre'/></div>
                <h3>Tienes una edad exacta de</h3>
                <div className='input-box1 w-25'><input type='text'  id='salida-año'/></div>
                <h3>Y te encuentras en la universidad </h3>
                <div className='input-box1'><input type='text'  id='salida-uni'/></div>
                
                <h3>es una universidad interesante espero que este repazo de danzas bolivianas te sea de utilidad.</h3> 
              </div>
              
        </div>
        </div>


        <div className='footer row-100'>Derechos reservados al estudiante Aliaga Nina Juan Diego</div>

      </div>  
        

      
    
    
  )
}

export default formulario