import React from 'react'
import '../hojas-de-estilo/Resumen.css'


const Resumen = () => {
  return (
    <div className='row'>
        <div className='Resumen col'>
          <div class="card border-primary mb-3" >
            
            <div class="card-body text-primary">
              <h5 class="card-title">Dazas tipicas de Beni</h5>
              <p class="card-text">Las danzas típicas en el departamento del Beni tiene características de la región tropical, estas se desarrollan usando un vestuario ligero, en su mayoría se usan el color blanco y detalles de colores llamativos que sobresalen de la indumentaria</p>
            </div>
          </div>

          <div class="card border-secondary mb-3">
            
            <div class="card-body text-secondary">
              <h5 class="card-title">Dazas tipicas de Cochabamba</h5>
              <p class="card-text">Varias de las danzas y ritmos de Bolivia se practican en Cochabamba. No todas ellas tienen origen local, pero por su consonancia y difusión, forman parte del atractivo y del acervo de la región del país, donde se ejecutan comúnmente en festividad</p>
            </div>
          </div>

          <div class="card border-success mb-3">
            
            <div class="card-body text-success">
              <h5 class="card-title">Dazas tipicas de La Paz</h5>
              <p class="card-text">La danzas típicas del departamento de La Paz tienen características del altiplano paceño, la música y la danza tienen un sentido plenamente funcional y ritual, por lo que su interpretación va más allá de la estética o la ornamentación.</p>
            </div>
          </div>

          <div class="card border-danger mb-3">
            
            <div class="card-body text-danger">
              <h5 class="card-title">Dazas tipicas de Oruro</h5>
              <p class="card-text"> Principalmente, la danza típica de Oruro es la Diablada que demuestra el sincretismo religioso-pagano a través de formas suntuosas, coloridas y exuberantes que ha ganado popularidad a lo largo del tiempo, es considerada la imagen cultural del folklóre</p>
            </div>
          </div>

          <div class="card border-warning mb-3">
            
            <div class="card-body">
              <h5 class="card-title">Dazas tipicas de Pando</h5>
              <p class="card-text">Las danzas del departamento de Pando resaltan los usos y costumbres de esta región de la Amazonía, con vestimenta ligera propias del lugar. Las danzas reconocidas por el Estado Plurinacional de Bolivia son: la Danza de las Etnias </p>
            </div>
          </div>

          <div class="card border-info mb-3">
            
            <div class="card-body">
              <h5 class="card-title">Dazas tipicas de Potosi</h5>
              <p class="card-text">Las danzas típicas de Potosí representan la ritualidad de agradecimiento a la tierra por la producción, estas son transmitidas de una generación a la otra, para promover parte de la costumbre ancestral y del patrimonio cultural de esta región</p>
            </div>
          </div>

          <div class="card border-light mb-3">
            
            <div class="card-body">
              <h5 class="card-title">Dazas tipicas de Santa Cruz</h5>
              <p class="card-text"> Entre las danzas típicas del departamento de Santa Cruz tenemos; La cueca cruceña, El Carnavalito una danza nacida al calor del Huayño valluno, la chovena una danza que se baila en los carnavales al ritmo del phifano de takuara.</p>
            </div>
          </div>

          <div class="card border-dark mb-3">
            
            <div class="card-body text-dark">
              <h5 class="card-title">Dazas tipicas de Tarija</h5>
              <p class="card-text">Las danzas típicas del departamento de Tarija se bailan acompañadas de guitarras, violines y bombos. En las diferentes celebraciones se ejecutan el erke, la caña, la camacheña, la caja, la quenilla y el tambor..</p>
            </div>
          </div>

          <div class="card border-primary mb-3">
            
            <div class="card-body text-primary">
              <h5 class="card-title">Dazas tipicas de Chuquisaca</h5>
              <p class="card-text">Las danzas del departamento de Chuquisaca son característicos de la región subtropical de nuestro país, están llenas de elementos rituales y religiosos que representan la identidad de cultural de esta área geográfica..</p>
            </div>
          </div>
        </div>

        <div className='Resumen col text-center '>
          <img className="imagen-departamento5 "
            src={require(`../imagenes/Resumen.jpg`)} />
          <img className="imagen-departamento5 "
            src={require(`../imagenes/Resumen1.jpg`)} />
          <img className="imagen-departamento5 "
            src={require(`../imagenes/ResumenE.jpg`)} />
          <img className="imagen-departamento5 "
            src={require(`../imagenes/ResumenP.jpg`)} />
        </div>

        <div className='footer row-100'>Derechos reservados al estudiante Aliaga Nina Juan Diego</div>

    </div>
  )
}

export default Resumen