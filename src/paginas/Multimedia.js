import React from 'react'
import ReactPlayer from 'react-player'
import '../hojas-de-estilo/Multimedia.css'

const Multimedia = () => {
  return (
    <div className='Multimedia row'>
        <div className='c1 col-6'>
            <div id="carouselExampleDark" class="carousel carousel-dark slide " data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
              <div class="carousel-inner">
                  <div class="carousel-item active " data-bs-interval="10000">
                    <img src={require(`../imagenes/Multi1.jpg`)} class="d-block w-100" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Paisajes de Bolivia</h5>
                      
                    </div>
                  </div>
                  <div class="carousel-item " data-bs-interval="2000">
                    <img src={require(`../imagenes/Multi2.jpg`)}  class="d-block w-100" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Paisajes de Bolivia</h5>
                      
                    </div>
                  </div>
                  <div class="carousel-item ">
                    <img src={require(`../imagenes/Multi3.jpg`)}  class="d-block w-100" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Paisajes de Bolivia</h5>
                      
                    </div>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
      </div>

      <div className='c2 col-6'>
        <div className='p1 row-100'><h2>Danza Salay</h2></div>
        <div className='p1 row-100'>
        <ReactPlayer url={require('../Video/video1.mp4')}
          width='100%'
          height='100%'
          controls
          playing
          volume='0.8'
        /></div>
      </div>

      <div className='footer row-100'>Derechos reservados al estudiante Aliaga Nina Juan Diego</div>
    </div>
  )
}

export default Multimedia