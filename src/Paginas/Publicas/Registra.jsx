import { Context } from "../../Context/Context";
import { useContext } from "react";
import React, { useState } from "react";
import Formulario_cliente from "../../Components/formulario";

export default function Registrar() {
  const { usuario, setUsuario } = useContext(Context);

  const agragar_datoscliente = (datos_clientes) => {
    if (!datos_clientes) {
      return;
    }

    console.log(datos_clientes);
    var a = {
      nombre: datos_clientes.nombre,
      age: datos_clientes.age,
      username: datos_clientes.username,
      password: datos_clientes.password,
      id: datos_clientes.id,
    };

    setUsuario([...usuario, a]);
  };

  return (
    <>
      {console.log(usuario)}
      <Formulario_cliente agregar_nombre={agragar_datoscliente} />
    </>
  );
}
