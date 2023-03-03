import React from "react";

const Buscador = () => {
  return (
    <>
      <form className="d-flex align-items-center ml-auto">
        <label className="form-label mx-2 mb-0">
          <input
            type="text"
            placeholder="Buscar..."
            name="keyword"
            aria-label="search"
            className="form-control"
          />
        </label>
        <button className="btn btn-secondary" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Buscador;
