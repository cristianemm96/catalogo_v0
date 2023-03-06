import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { obtenerProductos } from "../../firebase/firebase";
import EditarProducto from "./EditarProducto";

const TablaProductos = () => {
  const [prods, setProds] = useState([]);
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      const col = await obtenerProductos();
      const todosProductos = [];
      col.forEach((p) => {
        todosProductos.push({id:p.id, data:p.data()});
      });
      setProds(todosProductos);  
    })();
  }, []);
  useEffect(()=>{
    const actualData = []
    prods.forEach((p)=> actualData.push({id: p.id, nombre: p.data.nombre, precio: p.data.precio ,acciones: (
      <div key={p.id} data-product-id={p.id}>
        <EditarProducto idProducto = {p.id}/>
        <button className="btn btn-danger">Eliminar</button>
      </div>
    )}))
    setData(actualData)  
  },[prods])

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
      sortable: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
    },
  ];
    
  return (
    <div>
      <DataTable title={"Productos"} columns={columns} data={data} pagination />
    </div>
  );
};

export default TablaProductos;
