import "./hojas-de-estilo/App.css"

function App() {
  return (
    <div className="App">
      <div className="contenedor row">
        <div className="Imagen-principal col-6">
          <img  src={require('./imagenes/Im-principal.jpg')}/>
        </div>
        <div className="Titulo-principal col-6">
            <div className="row w-100"><h1 className="display-1">Proyecto Danzas Bolivianas <br></br>UMSA 2023</h1></div>

            <div className="Imagenes row w-100">
              <div className="Im1 col-5"><img className="imagen-departamento w-100 h-100" src={require('./imagenes/umsa.png')}/></div>
              <div className="Im2 col-5"><img className="imagen-departamento w-100 h-100" src={require('./imagenes/fcpn.png')}/></div>
            </div>
        </div>
        
      </div>
    </div>
      
    
  );
}

export default App;
