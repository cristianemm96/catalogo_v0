import React, { useEffect, useState } from "react";
import { useProductos } from "../../../contexto/ContextoProductos";
import ListaProductos from "../../main/ListaProductos";

const Resultado = () => {
  const [resultadoProductos, setResultado] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const queryPalabra = new URLSearchParams(window.location.search);
  const palabra = queryPalabra.get("palabra-buscada");
  const { productos, obtenerTodosLosProductos } = useProductos();
  useEffect(() => {
    obtenerTodosLosProductos();
    setTimeout(function () {
      setIsFetching(false);
    }, 8500);
  }, []);
  useEffect(() => {
    const reg = RegExp(`${palabra}`, "g");
    const productosFiltrados = productos?.filter(
      (p) =>
        reg.test(p.data.nombre.toLowerCase()) ||
        reg.test(p.data.descripcion.toLowerCase())
    );
    setResultado(productosFiltrados);
  }, [productos]);

  if (isFetching) {
    return (
      <div style={{ display: "flex", marginTop: "55px", justifyContent: "center", minHeight:"100px"}}>
        <div
          className="text-center"
        >
          <div className="spinner-border" role="status" style={{color:"red", width:"30px"}}>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{ display: "flex", marginTop: "55px", justifyContent: "center" }}
    >
      <ListaProductos prods={resultadoProductos} />
    </div>
  );
};

export default Resultado;
