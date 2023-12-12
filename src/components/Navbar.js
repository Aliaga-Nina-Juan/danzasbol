import React from 'react'
import { Link } from 'react-router-dom'
import '../hojas-de-estilo/Nav.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>Principal</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/Registro'>Registro</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Departamentos'>Departamentos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Lista'>Lista</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Resumen'>Resumen</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Multimedia'>Multimedia</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Danzas destacadas de region
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to='Altiplano'>Region Altiplanica</Link></li>
                            <li><Link className="dropdown-item" to='Valles'>Region de los Valles</Link></li>
                            <li><Link className="dropdown-item" to='Llanos'>Region de los Llanos</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/Creditos'>Creditos</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

