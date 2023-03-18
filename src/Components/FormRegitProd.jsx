import { useState } from "react";

const Formulario_publicar_producto_ = (props) => {
  const [inputnombre, setInputNombre] = useState("");
  const [productUrl, setInputUrl] = useState("");
  const [inputkilometros, setInputkilometros] = useState("");
  const [inputMarca, setInputMarca] = useState("");
  const [inputPrecio, setInputPrecio] = useState("");
  const [inputPropietario, setInputPropietario] = useState("");
  const [TipoDeCombustible, setInputCombustible] = useState("");

  const manejarFormulario = (e) => {
    e.preventDefault();

    var json = {
      nombre: inputnombre,
      url: productUrl,
      kilometros: inputkilometros,
      marca: inputMarca,
      id: 2,
      precio: inputPrecio,
      propietario: inputPropietario,
      combustible: TipoDeCombustible,
    };
    props.agregar_nombre(json);

    setInputNombre("");
    setInputUrl("");
    setInputkilometros("");
    setInputMarca("");
    setInputPropietario("");
    setInputPrecio("");
    setInputCombustible("");
  };
  return (
    <>
      <p> Registrar su producto para Publicacion</p>

      <form onSubmit={manejarFormulario} className="row productos-registrar ">
        <div>
          <img src="" alt="" />
        </div>
        <div class="container ">
          <input
            type="text"
            value={inputnombre}
            onChange={(e) => setInputNombre(e.target.value)}
            className=" input"
            placeholder="Nombre"
          />

          <input
            type="text"
            value={productUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="col-8 input"
            placeholder="Url-Image"
          />
          <input
            type="text"
            value={inputkilometros}
            onChange={(e) => setInputkilometros(e.target.value)}
            className="col-10 input"
            placeholder="kilometros"
          />
          <input
            type="text"
            value={inputMarca}
            onChange={(e) => setInputMarca(e.target.value)}
            className="col-8 input"
            placeholder="Marca"
          />
          <input
            type="text"
            value={inputPrecio}
            onChange={(e) => setInputPrecio(e.target.value)}
            className="col-8 input"
            placeholder="Precio"
          />

          <input
            type="text"
            value={inputPropietario}
            onChange={(e) => setInputPropietario(e.target.value)}
            className="col-8 input"
            placeholder="Propietario"
          />
          <input
            type="text"
            value={TipoDeCombustible}
            onChange={(e) => setInputCombustible(e.target.value)}
            className="col-8 input"
            placeholder="Combustible"
          />

          <button className="col-8 btn-primary add_client_register">
            Agregar Producto
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario_publicar_producto_;
