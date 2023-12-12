import React from 'react'
import '../hojas-de-estilo/Zonas.css'

const Llanos = () => {
  return (
    <div className='Llanos row'>
        <div class="card-group">
  <div class="card">
    <img className="fotos" src={require(`../imagenes/Llanos1.jpg`)} />
    <div class="card-body">
      <h5 class="card-title">Danza de el taquirari</h5>
      <p class="card-text">El Taquirari es el ritmo musical y el baile más característico del departamento de Pando. No se conoce con certeza su origen, pero existen testimonios de su presencia temprana en el siglo XIX, cuando, por ejemplo, el guerrillero cruceño Cañoto luchaba contra los españoles y tocaba en su guitarra melodías emparejadas con el trote del caballo. 

          Puede relacionarse la aparición del Taquirari con el desarrollo de la cultura criolla del oriente. Se cree que su nombre proviene de la palabra moxeña takiríkire que significa flecha.</p>
    </div>
    
  </div>
  <div class="card">
    <img className="fotos" src={require(`../imagenes/Llanos2.jpg`)} />
    <div class="card-body">
      <h5 class="card-title">Danza de los Macheteros</h5>
      <p class="card-text">El origen de la danza los Macheteros se remonta a la colonia. Y representa la resurrección de Jesucristo y su ascensión a los cielos, pero desde una interpretación nativa.

        Cada bailarín lleva en la mano derecha un machete de madera (tumoré ti yucuqui), una camisa larga y blanca, sin mangas ni cuello, y con franjas coloridas a los costados. Portan en la cabeza un tocado -denominado en lengua nativa, hecho de plumas de parabas (ave amazónica), artísticamente ordenado de acuerdo con la intensidad de los colores.</p>
    </div>
    
  </div>
  <div class="card">
    <img className="fotos" src={require(`../imagenes/Llanos3.jpg`)} />
    <div class="card-body">
      <h5 class="card-title">Danza de carnavalito</h5>
      <p class="card-text">El Carnavalito es una danza típica del departamento de Santa Cruz, nacida al calor del Huayño valluno y la tradicional Jota española durante el ocaso del coloniaje y el siglo XIX. En el oriente, el Carnavalito anuncia la llegada de las carnestolendas y cierra las fiestas después del primer viernes de pascua.

        Su importancia no sólo es festiva; por lo general, sus letras eran viejas composiciones rimadas, portadoras de enseñanzas tradicionales y de historias de enamorados.</p>
    </div>
    
  </div>
</div>

<div className='footer row-100'>Derechos reservados al estudiante Aliaga Nina Juan Diego</div>
    </div>
  )
}

export default Llanos