import React from "react";
import { productos } from "./data";

const Main = () => {
  return (
    <div className="d-flex flex-wrap" style={{marginTop:"55px", justifyContent:"center"}}>
      {productos.map((p) => {
        return (
          <div className="card" style={{width: "19rem", margin:"10px"}} key={Math.random()}>
            <img className="card-img-top" src={p.imgURL} alt="Card image cap" style={{maxHeight:"250px", minHeight:"250px"}}/>
            <div className="card-body">
              <h5 className="card-title">{p.nombre}</h5>
              <p className="card-text">
                {p.descripcion}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><h4>$ {p.precio}</h4></li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Main;


/*
<div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>

*/