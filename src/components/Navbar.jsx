import React from 'react'
import Logo from "../imgs/logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <div><h1>Carrito Fresco</h1></div>
       <img src={Logo} alt="..." style={{width: '400px', }} /> 

       <h1>Aqui viene el menú</h1>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">principal</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link" href="#">productos</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" href="#">Pricing</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
