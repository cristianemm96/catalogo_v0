import React from "react";
import Buscador from "./buscador/Buscador";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="fixed-top">
        <nav
          className="navbar navbar-dark bg-dark navbar-expand-md"
          id="collapse"
        >
          <Link to="/" className="nav-link px-2 text-primary">Fiambres</Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/productos/configuracion" className="nav-link px-2 text-primary">Productos</Link>
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item ml-auto"></li>
            </ul>
            <Buscador />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
