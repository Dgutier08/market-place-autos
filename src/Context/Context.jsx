import { createContext, useEffect, useState } from "react";

import axios from "axios";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [dato, setData] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [productos, setProductos] = useState([]);
  const [inicioseccion, setInicioseccion] = useState(false);

  const url = "/db.json";
  const consultarautos = async (url) => {
    try {
      fetch(url);
      const res = await axios.get(url);
      const { data } = await res;
      setData(data);
      setUsuario(data.usuario);
      setProductos(data.products);
    } catch (error) {
      throw new Error("ha fallado la conexion con los datos", { cause: error });
    }
  };
  useEffect(() => {
    consultarautos(url);
  }, []);

  console.log(dato);
  console.log(usuario);
  console.log(productos);

  return (
    <Context.Provider
      value={{
        dato,
        usuario,
        setUsuario,
        inicioseccion,
        setInicioseccion,
        productos,
        setProductos,
      }}
    >
      {children}
    </Context.Provider>
  );
};
