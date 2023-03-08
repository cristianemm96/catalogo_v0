import React from 'react'
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Main from '../componentes/main/Main';
import AdminProductos from '../componentes/productos/AdminProductos';
import Resultado from '../componentes/header/buscador/Resultado'

const ContenedorRutas = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Main/>} />
      <Route path='/productos/configuracion' element={ <AdminProductos/> } />
      <Route path='/resultado' element={<Resultado/>} />
    </ReactDomRoutes>
  )
}

export default ContenedorRutas
