import React from 'react'
import '../hojas-de-estilo/Zonas.css'

const Valles = () => {
  return (
    <div className='Valles row'>
          <div class="card-group">
            <div class="card">
              <img className="fotos" src={require(`../imagenes/Valles1.jpg`)} />
              <div class="card-body">
                <h5 class="card-title">Danza de la chacarera</h5>
                <p class="card-text">La chacarera, es una danza folklórica proveniente del norte argentino y del sur boliviano (Tarija). Hoy fraternidades, grupos de baile, peñas, grupos musicales se impregnaron del ritmo, de sus giros y contragiros para difundirla.

La chacarera es una danza vivaz que se baila en pareja. Esta es suelta - ya que los bailarines no se tocan - e independiente, o sea que hacen solas sus evoluciones, sin combinarlas con las de otra pareja.</p>
              </div>
              
            </div>
            <div class="card">
              <img className="fotos" src={require(`../imagenes/Valles2.jpg`)} />
              <div class="card-body">
                <h5 class="card-title">Danza de los potolos</h5>
                <p class="card-text">La danza los Potolos es originaria de las poblaciones Potolo de Chuquisaca y Potobamba de Potosí. Los movimientos rítmicos acompasados con movimientos graciosos de las caderas, que le pone simpatía al baile.

Se dice que esta danza representa el acarreamiento del agua y el enamoramiento del varón a la mujer es costumbrista que se practica en toda esa región.</p>
              </div>
              
            </div>
            <div class="card">
              <img className="fotos" src={require(`../imagenes/Valles3.jpg`)} />
              <div class="card-body">
                <h5 class="card-title">Cueca cochabambina</h5>
                <p class="card-text">La Cueca es una danza muy popular en todos los departamentos de Bolivia, tiene algunas variantes según la región: la Cueca chapaca (Tarija), paceña (La Paz), chuquisaqueña (Sucre), cochabambina (Cochabamba).

                    La Cueca, que tiene un ancestro en el zapateo español, en la época de la colonia estuvo reservada para la clase aristocrática de dicho periodo y también de los primeros años de la independencia boliviana.

                </p>
              </div>
              
            </div>
          </div>

          
          <div className='footer row-100'>Derechos reservados al estudiante Aliaga Nina Juan Diego</div>

    </div>
  )
}

export default Valles