import React, { useState } from "react";
import ListaProductos from "./Listaproductos";

const FiltroProductos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("");

  const filtrarPorCategoria = (event) => {
    setFiltroCategoria(event.target.value);
  };

  const obtenerCategoriasUnicas = () => {
    const categoriasUnicas = [
      ...new Set(ListaProductos.map((categoria) => categoria.categoria)),
    ];
    return categoriasUnicas;
  };

  const categoriasFiltradas = ListaProductos.filter((categoria) =>
    categoria.categoria
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        filtroCategoria
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  return (
    <div>
      <div className="container">
        <h1 className="my-4">Nuestros Destinos Turísticos</h1>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="filtroCiudad" className="form-label">
              Filtrar por ciudad:
            </label>
            <input
              type="text"
              id="filtroCiudad"
              className="form-control"
              value={filtroCategoria}
              onChange={filtrarPorCategoria}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="selectCiudad" className="form-label">
              Ciudades disponibles:
            </label>
            <select
              id="selectCiudad"
              className="form-select"
              value={filtroCategoria}
              onChange={filtrarPorCategoria}
            >
              <option value="">Todas las ciudades</option>
              {obtenerCategoriasUnicas().map((categoria, index) => (
                <option value={categoria} key={index}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          {categoriasFiltradas.map((categoria, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <img
                  src={categoria.imagen}
                  className="card-img-top"
                  alt={categoria.categoria}
                />
                <div className="card-body">
                  <h5 className="card-title">{categoria.nombreP}</h5>
                  <p className="card-text">{categoria.descripcion}</p>
                  <p className="card-text">$ {categoria.precio}</p>
                  <p className="card-text">{categoria.categoria}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltroProductos;
