import React from 'react'
import '../hojas-de-estilo/Lista.css'

const Lista = () => {
  return (
    <div className='Lista row'>
      <div className='Acordiones col-6'>
        <div  class="accordion " id="accordionPanelsStayOpenExample">
          <div class="accordion-item border-danger ">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Danzas del departamento de Beni
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                Achu
                Achané tupana o pigmeos
                Asañaré
                Bajones
                Balseros de Rurrenabaque
                Chinisiri
                Chovena
              </div>
            </div>
          </div>
          <div class="accordion-item border-success">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Danzas del departamento de Chuquisaca
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
              Aylalito
              Arete guazu
              Ajaycito
              Aticuy-Atico
              Ayarichi
              Bailecito
              Cacharpaya (Canto)
              Caja y Rueda de Azurduy
              Carnaval de Yotala
              Chuntunqui
              Copla Valluna-Chaqueña
              Cueca a caballo
              Cueca chaqueña
              Cueca de piano o Chuquisaqueña
              Cueca Cinteña
              Danza Camargueña
              Danza de Sopachuy
              Danza Icleña
              Encanto Mojocoyano
              Estampa
              Fandango Boliviano
              Jalq'a
              Liberia
              Marcada
              Pandilla de Sucre
              Pim Pim
              Pujllay
              Tairari
              Thanta morenos
              Tonada
              Vals Chuquisaqueño
              </div>
            </div>
          </div>
          <div class="accordion-item border-danger">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                Danzas del departamento de Cochabamba
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                Bailecito cochabambino
                Cacharpaya cochabambina
                Ch'ampas de Aiquile
                Chiriwanu
                Ch'unch'us
                Coplas de Carnaval
                Coplas de Todo Santos
                Coplas de Santa Veracruz
                Cueca cochabambina
                Huayno cochabambino
                Lichiwayus de Ayopaya
                Mullu mullus (o muyu muyus)
                Salay
              </div>
            </div>
          </div>
          <div class="accordion-item border-success">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                Danzas del departamento de La Paz
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
              <div class="accordion-body">
              Achuqalla
              Alférez
              Alma pinquillu
              Arachi
              Arrieros
              Auqui auqui
              Ayawaya
              Balseros de Wiñaymarka
              Bárbaros
              Cachua
              Cambiaj
              Cambraya
              Caporales
              </div>
            </div>
          </div>
          <div class="accordion-item border-danger">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                Danzas del departamento de Oruro
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
              <div class="accordion-body">
              Anata
              Antahuara
              Awatiris
              Ayawaya
              Cueca orureña
              Diablada de Oruro
              Doctorcitos o huayralevas
              Intillajta
              Lichiwayus
              Llamerada
              Morenada
              Pinkillada
              Sampoñaris
              Suri siku
              Suri Sicuri
              Tarqueada
              Tobas6​
              wawqu
              Wititis
              </div>
            </div>
          </div>
          <div class="accordion-item border-success">
            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                Danzas del departamento de Pando
              </button>
            </h2>
            <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
              <div class="accordion-body">
              Chovena
              Danza flora y fauna
              Danza de los pescadores
              Danza de los tacanas
              Danza del caimanero
              Danza del Jichi
              Danza del palmito
              Danza del Siringuero Castañero
              Danza Pacahuara
              Danza Saraza
              Danza Yaminahua
              Jiririta o mata palo
              Manupareña
              Pau
              Taquirari
              Pandinita
              </div>
            </div>
          </div>
          <div class="accordion-item border-danger">
            <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                Danzas del departamento de Potosi
              </button>
            </h2>
            <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
              <div class="accordion-body">
              Ayarachi
              Buñueleros
              Caja rueda de Puna
              Calcheños
              Carnaval de Cotagaita
              Carnaval de Pocoata
              Carnaval blanco de Tomave
              Carnaval de Vitichi
              Carnaval Pali Pali
              Chaxi
              Chililin
              Cueca potosina
              Cueca tupiceña
              Danza Chayanta
              Danza Chililin
              Danza Pilpintus o de las Mariposas
              Danza Reqhoque afropotosina
              Fandango boliviano
              Hualaychos
              Jalkas
              Jiyawas
              Jula julas
              Kalampeo Norte Potosino
              Lata caja Pocoateño
              Los Chullpas de Llica
              Los Rekes de Potosí
              Mineritos
              Morenos Vilacayeños
              Pandilla potosina
              Pinquillada del Norte Potosí
              Potolos
              Qhonqhota
              Rikuchiku
              Rollanos
              Salaque Colquechaqueño
              Tinku
              Tinku Diablos de Aullagas
              Turuchipeños
              Viejos de Rodero
              Wachiquis Navideños
              Wawqu
              Wayñu
              Yureños
              </div>
            </div>
          </div>
          <div class="accordion-item border-success">
            <h2 class="accordion-header" id="panelsStayOpen-headingTh">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTh" aria-expanded="false" aria-controls="panelsStayOpen-collapseTh">
                Danzas del departamento de Santa Cruz
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTh" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTh">
              <div class="accordion-body">
              Arete guazu (o arete guasú)
              Atiku
              Brincao
              Cántaro e chicha
              Carnavalito cruceño
              Chivero
              Chovena chiquitana
              Contra lanza
              Cuadrilla
              “Cueca cruceña”
              Danza barroca chiquitana
              Danza del bejuco
              Danza de los abuelos
              Danza de los lanceros
              Danza Sirionó
              Kaluyo vallegrandino
              La Tirana de Santa Rosa del Sara
              Pim pim (o pin pin)
              Quitobiquish
              Sarao
              Taquirari
              Turcos
              Viritas
              Yarituses
              </div>
            </div>
          </div>
          <div class="accordion-item border-danger">
            <h2 class="accordion-header" id="panelsStayOpen-headingThre">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThre" aria-expanded="false" aria-controls="panelsStayOpen-collapseThre">
                Danzas del departamento de Tarija
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThre" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThre">
              <div class="accordion-body">
              Aña aña
              Arete guazu (o arete guasú)
              Atiku
              Chunchos de San Roque
              Copla chapaca
              Cueca chapaca
              Danza de la Fiesta de Guadalupe
              Gato
              Michizos
              Mañanitas de Pascua (zapateo de San Lorenzo)
              Pim pim (o pin pin)
              Rueda chapaca
              Tonadas
              Wirapepo (o guirapepo)
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className='col-6'>
        <img className="w-100" src={require('../imagenes/lista.jpg')}/>
      </div>

      <div className='footer row-100'>Derechos reservados al estudiante Aliaga Nina Juan Diego</div>

    </div>
  )
}

export default Lista
