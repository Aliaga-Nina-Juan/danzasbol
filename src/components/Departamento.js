import React from "react";

import '../hojas-de-estilo/Departamento.css';

function Departamento(props){
  return(
    <div className='contenedor-departamento'>
      <img className="imagen-departamento"
      src={require(`../imagenes/departamento-${props.imagen}.jpg`)}
      alt="foto de La-Paz" />
      <div className="contenedor-texto">
        <p className="nombre-departamento">{props.nombre}</p>
        <p className="Aniversario">{props.aniversario}</p>
        <p className="texto-departamento">{props.historia}</p>
      </div>


    </div>
  );    
}

export default Departamento;
