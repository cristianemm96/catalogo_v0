import React from "react";
import Buscador from "./Buscador";

const Header = () => {
  return (
    <>
      <header className="fixed-top">
        <nav 
          className="navbar navbar-dark bg-dark navbar-expand-md"
          id="collapse"
        >
          <a href="/" className="navbar-brand">
            Fiambres
          </a>
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
                <a href="#" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item ml-auto"></li>
            </ul>
           <Buscador/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
