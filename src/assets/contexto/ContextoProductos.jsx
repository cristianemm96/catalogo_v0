import React, { createContext, useContext, useState } from "react";
import {
  guardarProducto,
  obtenerDatosPorID,
  obtenerProductos,
  editarProductoID,
  eliminarProductoID,
} from "../firebase/firebase";

export const ContextoProductos = createContext();
export const useProductos = () => {
  const contexto = useContext(ContextoProductos);
  if (!contexto) {
    throw new Error(
      "El hook useProductos debe utilizarse dentro de un Proveedor."
    );
  }
  return contexto;
};

export const ProveedorContexto = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const obtenerTodosLosProductos = async () => {
    const prodsFirestore = await obtenerProductos();
    const todosProductos = [];
    prodsFirestore.forEach((p) => {
      todosProductos.push({ id: p.id, data: p.data() });
    });
    setProductos(todosProductos);
  };

  const agregarProducto = async (producto) => {
    try {
      await guardarProducto(producto);
      obtenerTodosLosProductos();
    } catch {}
  };

  const editarProductoConID = async (producto, id) => {
    await editarProductoID(producto, id);
    obtenerTodosLosProductos();
  };

  const obtenerDatosProducto = async (id)=>{
    const datos = await obtenerDatosPorID(id)
    return datos
  }

  const eliminarProductoConID = async(id)=>{
    await eliminarProductoID(id)
    obtenerTodosLosProductos()
  }

  const actualizarPrecios = async({porcentaje, categoria})=>{
    try{
      productos.forEach(p=>{
        const nuevoPrecio = Math.round(p.data.precio + ((p.data.precio * porcentaje) / 100))
        console.log(categoria)
        if(categoria.toLowerCase() === "todas" || p.data.categoria.toLowerCase() === categoria.toLowerCase()){
          editarProductoConID({
            nombre: p.data.nombre,
            precio: nuevoPrecio,
            categoria: p.data.categoria,
            descripcion: p.data.descripcion,
            articulo: p.data.articulo,
            urlIMG: p.data.urlIMG
          }, p.id)
        }
      })
      swal({text:"Precios actualizados", icon:"success"})
    }catch{

    }
    
  }

  return (
    <ContextoProductos.Provider
      value={{
        productos,
        obtenerTodosLosProductos,
        agregarProducto,
        editarProductoConID,
        obtenerDatosProducto,
        eliminarProductoConID,
        actualizarPrecios
      }}
    >
      {children}
    </ContextoProductos.Provider>
  );
};
