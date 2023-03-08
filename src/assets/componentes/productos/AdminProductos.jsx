import React from "react";
import AgregaProductos from "./AgregaProductos";
import EditarPrecios from "./EditarPrecios";
import TablaProductos from "./TablaProductos";

const AdminProductos = () => {
  return (
    <div
      style={{
        width: "72%",
        margin: "auto",
        marginTop: "120px",
        minHeight: "100vh",
      }}
    >
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <EditarPrecios />
        <AgregaProductos />
      </div>
      <TablaProductos />
    </div>
  );
};

export default AdminProductos;
