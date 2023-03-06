import React, { createContext, useContext, useState } from "react";
import { obtenerDatosPorID, obtenerProductos } from "../firebase/firebase";

export const ContextoProductos = createContext();
export const useProductos = () => {
  const contexto = useContext(ContextoProductos);
  if (!contexto) {
    throw new Error("El hook useProductos debe utilizarse dentro de un Proveedor.");
  }
  return contexto;
};

export const ProveedorContexto = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const obtenerTodosLosProductos = async() => {
    const prodsFirestore = await obtenerProductos();
    const todosProductos = [];
    prodsFirestore.forEach((p) => {
        todosProductos.push({id:p.id, data: p.data()});
      });
    setProductos(todosProductos)
  };
  
  return(
    <ContextoProductos.Provider value={{productos, obtenerTodosLosProductos}}>
        {children}
    </ContextoProductos.Provider>
  )
};
