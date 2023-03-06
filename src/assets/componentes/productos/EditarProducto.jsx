import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { editarProductoID, obtenerDatosPorID } from "../../firebase/firebase";

const EditarProducto = ({ idProducto }) => {
  const [show, setShow] = useState(false);
  const [productoDatos, setProductoDatos] = useState({nombre:"", precio:null, articulo:"", urlIMG:""})
  const handleShow = () => setShow(true);
  const handleClose = ()=> setShow(false)
  const guardarCambios = () => {
    editarProductoID(productoDatos, idProducto);
    setShow(false);
  };

  const obtenerDatos = async ()=>{
    const datos = await obtenerDatosPorID(idProducto)
    setProductoDatos({nombre:datos.nombre, precio:datos.precio, articulo: datos.articulo, urlIMG: datos.urlIMG})
    handleShow()
  }
  //refactorizar render
  return (
    <>
      <Button
        variant="primary"
        onClick={obtenerDatos}
        style={{ marginRight: "3px" }}
      >
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" autoFocus value={productoDatos.nombre} onChange={e=>setProductoDatos({...productoDatos, nombre: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" autoFocus value={productoDatos.precio} onChange={e=>setProductoDatos({...productoDatos, precio: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Articulo</Form.Label>
              <Form.Control type="number" autoFocus value={productoDatos.articulo} onChange={e=>setProductoDatos({...productoDatos, articulo: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control type="text" autoFocus value={productoDatos.urlIMG} onChange={e=> setProductoDatos({...productoDatos, urlIMG: e.target.value})}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={guardarCambios}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditarProducto;
