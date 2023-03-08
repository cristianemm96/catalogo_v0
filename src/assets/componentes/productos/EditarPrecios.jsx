import React, { useState } from "react";
import { useProductos } from "../../contexto/ContextoProductos";

const EditarPrecios = () => {
  const categorias = ['Todas', 'Fiambres', 'Quesos']
  const {actualizarPrecios} = useProductos()
  const [dataAumento, setDataAumento] = useState({
    porcentaje: '',
    categoria: "todas",
  });

  const realizarAumento = (e)=>{
    e.preventDefault()
    console.log(dataAumento)
    actualizarPrecios(dataAumento)
  }

  return (
    <div>
      <form
        onSubmit={realizarAumento}
      >
        <input
          type="number"
          name="porcentaje"
          placeholder="Porcentaje"
          value={dataAumento.porcentaje}
          onChange={e=>setDataAumento({...dataAumento, porcentaje: e.target.value})}
          required
        />
        <select
          name="categorias"
          id="categorias"
          style={{ marginLeft: "5px" }}
          defaultValue={dataAumento.categoria}
          onChange={e=>setDataAumento({...dataAumento, categoria: e.target.value})}
        >
          {categorias.map((c,i)=>{
            return <option value={c} key={i}>{c}</option>
          })}
        </select>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginLeft: "5px" }}
        >
          Actualizar Precios
        </button>
      </form>
    </div>
  );
};

export default EditarPrecios;


/*
<option value="Todas">Todas</option>
          <option value="Fiambres">Fiambres</option>
          <option value="Quesos">Quesos</option>

*/