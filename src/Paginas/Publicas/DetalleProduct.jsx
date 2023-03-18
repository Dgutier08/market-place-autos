import { Context } from "../../Context/Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../layouts/Footer";

export function Detalleproducto() {
  const { id } = useParams();
  const { dato } = useContext(Context);
  const productos = dato.products;

  const x = productos?.findIndex((x) => x.id === Number(id));

  return (
    <>
      {productos ? (
        <div className="padre  d-flex row">
          <div className="col  " style={{ color: "#fff" }}>
            <div className="imagen-carta">
              <img
                src={productos[x].productUrl}
                alt=""
                className="imagen-detalle"
              />
            </div>
          </div>
          <div
            className="col  texto-detalle-product "
            style={{ color: "black" }}
          >
            <div className="imagen-texto">
              <p>
                <label className="nombre">Nombre:</label>
                {productos[x].nombre}
              </p>
              <label>Marca:</label>
              <p>{productos[x].marca}</p>
              <label>Kilometros:</label>
              <p>{productos[x].kilometros}</p>
              <label>Propietario:</label>
              <p>{productos[x].propietario}</p>
              <label>Tipo de Combustible:</label>
              <p>{productos[x].tipo_de_combustible}</p>
              <label>Precio:</label>
              <p>{productos[x].precio}</p>
              <button className="boton-detalle-producto">Contactar</button>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  );
}
