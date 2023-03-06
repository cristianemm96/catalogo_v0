import React from 'react'
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Main from '../componentes/main/Main';
import AdminProductos from '../componentes/productos/AdminProductos';


const ContenedorRutas = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Main/>} />
      <Route path='/productos/configuracion' element={ <AdminProductos/> } />
    </ReactDomRoutes>
  )
}

export default ContenedorRutas
