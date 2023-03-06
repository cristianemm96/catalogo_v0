import React from "react";
import AgregaProductos from "./AgregaProductos";
import TablaProductos from "./TablaProductos";

const AdminProductos = () => {
  return (
    <div style={{width:"80%", margin: "auto", marginTop:"120px", minHeight:"100vh"}}>
      <AgregaProductos/>
      <TablaProductos/>
    </div>
  );
};

export default AdminProductos;
