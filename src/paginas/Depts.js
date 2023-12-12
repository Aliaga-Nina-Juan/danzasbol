import React from 'react'
import '../hojas-de-estilo/Depts.css'
import Departamento from '../components/Departamento'

const Depts = () => {
  return (
    <div className="Dept">
      <div className='contenedor-principal'>
        <h1>Estos son los departamentos de la linda Bolivia</h1>
          <Departamento
            imagen="la-paz" 
            nombre="La Paz"
            aniversario="El departamento de La Paz se fundó el 20 de octubre de 1548 y se creó como departamento el 19 de noviembre de 1826."
            historia="El departamento de La Paz nació en homenaje a la pacificación impuesta por Pedro de La Gasca entre los españoles que luchaban entre sí, por obtener la mayor cantidad de riquezas y poder.

            El presidente de la Real Audiencia de Charcas, La Gasca, ordenó al capitán Alonso de Mendoza que fundara una ciudad que sirviera de enlace entre Potosí y el Bajo Perú. Mendoza escogió la iglesia de la localidad de Laja para esta fundación.
            
            Así, el 20 de octubre de 1548, junto a 10 compañeros, en el primer aniversario de la Batalla de Huarina, tuvo lugar la fundación del departamento de La Paz, con el nombre de “Nuestra Señora de La Paz”."
            />
          <Departamento
          imagen="oruro"
          nombre="Oruro"
          aniversario="La ciudad fue fundada el 1 de noviembre de 1606"
          historia="Oruro es una ciudad y municipio de Bolivia, capital y ciudad más poblada del departamento de Oruro y de la provincia de Cercado. El municipio tiene una población de 264 683 habitantes (según el último Censo boliviano de 2012), convirtiéndose de esa manera en la quinta ciudad más poblada de Bolivia. El Instituto Nacional de Estadística (INE) estima que la población de Oruro llegó al año 2020 a los 302 643 habitantes, aproximadamente.6​7​ Oruro se encuentra ubicada a una altitud de 3735 m s. n. m.,4​ siendo también considerada entre las ciudades más altas del mundo."
          />
          <Departamento
          imagen="potosi"
          nombre="Potosí"
          aniversario="Cada 10 de noviembre se recuerda el aniversario cívico del departamento de Potosí en homenaje a la gesta libertaria del 1810."
          historia="Potosí es una ciudad legendaria, durante la época colonial gozó de inmenso renombre por la ingente cantidad de plata que fue explotado desde el interior del Cerro Rico, a cuyos pies aún se escribe la histórica de esta ciudad.
          Potosí conmemora el levantamiento de sus habitantes en armas y la toma de prisionero al gobernador español Francisco de Paula Sanz. Las fuerzas libertarias estaban encabezadas por Manuel Molina, los hermanos Nogales, Salvador José Matos, Melchor Daza, Mariano Subieta y los hermanos Millares."
          />
          <Departamento
          imagen="tarija"
          nombre="Tarija"
          aniversario="El 24 de septiembre de 1831 se creó definitivamente el departamento de Tarija"
          historia="Tras la emancipación de Bolivia, Tarija tardó en incorporarse a la nueva República, ya que en 1826 fue designada como una de las Provincias Unidas del Río de la Plata. Finalmente, el 24 de septiembre de 1831 se creó definitivamente el departamento de Tarija como parte de la República de Bolivia, por decreto supremo del mariscal Andrés de Santa Cruz."
          />
          <Departamento
          imagen="chuquisaca"
          nombre="Chuquisaca"
          aniversario="El 25 de mayo de 1809 se realizó la Revolución de Chuquisaca, que fue el primer grito libertario de América del Sur"
          historia=" fue un levantamiento popular ocurrido el 25 y 26 de mayo de 1809 en la ciudad de La Plata (hoy Sucre, capital de Bolivia), perteneciente al virreinato del Río de la Plata. Los oidores revolucionarios del tribunal de la Real Audiencia de Charcas, con el apoyo del claustro universitario y de sectores minoritarios ocultos de independentistas, destituyeron al presidente de la Real Audiencia, y transformándose esta en una Junta de Gobierno denominada Audiencia Gobernadora."
          />
          <Departamento
          imagen="cochabamba"
          nombre="Cochabamba"
          aniversario="El Aniversario de Cochabamba se celebra el 14 de septiembre en homenaje a la revolución de 1810,"
          historia="El 14 de septiembre de 1810 se registra el levantamiento libertario de Cochabamba que estuvo encabezado por el gobernador Francisco del Rivero, secundado por el rebelde Esteban Arze; luego de tomar el poder político, se estableció una Junta de Guerra que inició negociaciones con Buenos Aires y adoptó diversas medidas administrativas relacionándose con las juntas de Chuquisaca y La Paz que anteriormente se habían rebelado y declarado su libertad."
          />
          <Departamento
          imagen="pando"
          nombre="Pando"
          aniversario="El 24 de septiembre de 1938 se creó el departamento de Pando"
          historia="El Departamento de Pando, brinda una aventura única, por sus áridos caminos o sus incursiones a través de sus ríos, con lugares paradisiacos, donde la aventura no puede estar ausente y se la puede encontrar en cada rincón de este joven departamento que tiene una gran variedad de fauna y flora."
          />
          <Departamento
          imagen="beni"
          nombre="Beni"
          aniversario="El 18 de noviembre de 1842, el presidente José Ballivián creó el departamento del Beni "
          historia="Beni, por su clima y suelo, es apto para toda clase de cultivos tropicales: maíz, cacao, café, castaña, vainilla, yuca o mandioca, arroz, maracuyá, papaya, cítricos y otras frutas tropicales, goma elástica o caucho, castaña, vainilla. Asimismo, el número de cabezas de ganado es de alrededor de dos millones. Además de la presencia de minerales de estaño, manganeso, plomo, platino, oro, berilio y columbita."
          />
          <Departamento
          imagen="santa"
          nombre="Santa Cruz"
          aniversario="El Aniversario de Santa cruz se celebra cada 24 de septiembre con motivo del grito libertario de 1810"
          historia="Una vez conformada Bolivia, Santa Cruz se une con la mitad del territorio; a lo largo de la vida republicana, se dividió primero con Beni y después con Pando, y contribuyó no sólo durante la guerra de la independencia, sino a lo largo de estos 186 años de vida independiente con alimentos, recursos humanos y recursos naturales."
          /> 


      </div>
      
      <div className='footer row-100'>Derechos reservados al estudiante Aliaga Nina Juan Diego</div>
    </div>
  )
}

export default Depts