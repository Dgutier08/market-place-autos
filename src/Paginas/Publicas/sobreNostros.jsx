import { Context } from "../../Context/Context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export function SobreNostros() {
  const [dato, setData] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const url = "users.json";
  const consultarautos = async (url) => {
    try {
      fetch(url);
      const res = await axios.get(url);
      const { data } = await res;
      setData(data);
    } catch (error) {
      throw new Error("ha fallado la conexion con los datos", { cause: error });
    }
  };
  useEffect(() => {
    consultarautos(url);
  }, []);
  console.log(dato);
  return (
    <>
      <h1>soy la pagina sobre nosotros</h1>
    </>
  );
}
