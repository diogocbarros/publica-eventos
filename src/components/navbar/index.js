import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <nav className="navbar-brand text-white font-weight-bold">Eventos</nav>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active ">
              Home
            </Link>
            <Link to="/login" className="nav-item nav-link active ">
              Login
            </Link>
            <Link to="/novousuario" className="nav-item nav-link active ">
              Cadastrar
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
