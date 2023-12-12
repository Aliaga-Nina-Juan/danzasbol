import React from 'react'
import '../hojas-de-estilo/Zonas.css'

const Altiplano = () => {
  return (
    <div className='Altiplano row'>
        <div class="card-group">
          <div class="card">
            <img className="fotos" src={require(`../imagenes/Altiplano1.jpg`)} />
            <div class="card-body">
              <h5 class="card-title">La kullawada</h5>
              <p class="card-text">La Kullawada, kullahuada, cullaguada o kullawa es una danza que se practica en Bolivia y en el Perú. Una hipótesis sostiene que el nombre de la danza deriva de la palabra del idioma aimara kullaka (“hermana” en castellano), en referencia a sus bailarinas.

                En Bolivia, la kullawada fue declarada como Patrimonio Cultural de Bolivia mediante la Ley 134 del año 2011 y es bailada principalmente en el Carnaval de Oruro, la Fiesta del Gran Poder, la Festividad de Urkupiña, la Festividad de Chutillos y la Festividad del Señor de Colquepata.1​ En el Perú es bailada en la Fiesta de la Candelaria de Puno.</p>
            </div>
            
          </div>
          <div class="card">
            <img className="fotos" src={require(`../imagenes/Altiplano2.jpg`)} />
            <div class="card-body">
              <h5 class="card-title">La diablada</h5>
              <p class="card-text">La diablada es una danza llamada así por la careta y el traje de diablo que usan los bailarínes.1​ La danza representa el enfrentamiento2​ entre las fuerzas del bien y del mal, reuniendo tanto elementos propios de la religión católica introducida durante la presencia hispánica como los del ritual tradicional andino.3​Se aprecia principalmente en el Carnaval de Oruro en Bolivia, la Fiesta de la Candelaria en el Perú y en la Fiesta de La Tirana en Chile. El sentido de identidad patrimonial de esta danza es motivo de disputa.</p>
            </div>
            
          </div>
          <div class="card">
            <img className="fotos" src={require(`../imagenes/Altiplano3.jpg`)} />
            <div class="card-body">
              <h5 class="card-title">Danza de la saya</h5>
              <p class="card-text">La danza y la música de la Saya son originarias del valle de los Yungas (La Paz) y representativas de la cultura afro andino.

                El ritmo de la Saya esta dado por el sonido sordo de tambor (bombo) que resuena como la doble palpitación del corazón y se caracterizada por el tintineo de campanillas del caporal (capataz elegido por los colonizadores españoles para supervisar el trabajo de los esclavos) que dirige la danza agitando un látigo.

                Los hombres tocan el tambor mientras que las mujeres cantan y bailan removiendo las caderas, los hombros y los brazos.

                Los comportamientos de los bailarines son relativamente simples: las mujeres llevan un largo vestido (pollera), una blusa de color, un mantón (manta), y un sombrero borsalino, y los hombres camisa, pantalones y sandalias.</p>
            </div>
            
          </div>
        </div>

        <div className='footer row-100'>Derechos reservados al estudiante Aliaga Nina Juan Diego</div>
    </div>
    
   
  )
}

export default Altiplano