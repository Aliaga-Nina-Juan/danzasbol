import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Route,Routes,BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Formulario from './paginas/Formulario';
import Depts from './paginas/Depts';
import  Lista  from './paginas/Lista';
import Resumen from './paginas/Resumen';
import Multimedia from './paginas/Multimedia';
import Creditos from './paginas/Creditos';
import Altiplano from './paginas/Altiplano';
import Valles from './paginas/Valles';
import Llanos from './paginas/Llanos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path='/' element={<App/>}/>
          <Route path='/Registro' element={<Formulario/>}/>
          <Route path='/Departamentos' element={<Depts/>}/>
          <Route path='/Lista' element={<Lista/>}/>
          <Route path='/Resumen' element={<Resumen/>}/>
          <Route path='/Multimedia' element={<Multimedia/>}/>

          <Route path='/Altiplano' element={<Altiplano/>}/>
          <Route path='/Valles' element={<Valles/>}/>
          <Route path='/Llanos' element={<Llanos/>}/>

          <Route path='/Creditos' element={<Creditos/>}/>


        </Routes>
    </BrowserRouter>
      
  </React.StrictMode>
);




