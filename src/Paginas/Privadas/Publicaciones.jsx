import { Context } from "../../Context/Context";
import { useContext } from "react";
import Formulario_publicar_producto_ from "../../Components/FormRegitProd";
import Footer from "../../layouts/Footer";

export default function Publicaciones() {
  const { productos, setProductos } = useContext(Context);
  const agragar_productos_publicaciones = (datos_prodcutos) => {
    if (!datos_prodcutos) {
      return;
    }

    var Publicacion = {
      id: datos_prodcutos.id,
      nombre: datos_prodcutos.nombre,
      url: datos_prodcutos,
      marca: datos_prodcutos.marca,
      password: datos_prodcutos.password,
      id: datos_prodcutos.id,
      precio: datos_prodcutos.precio,
      propietario: datos_prodcutos.propietario,
      tipo_de_combustible: datos_prodcutos.combustible,
    };
    if (Publicacion != "") {
      setProductos([...productos, Publicacion]);
    }
  };
  console.log(productos);
  return (
    <>
      <Formulario_publicar_producto_
        agregar_nombre={agragar_productos_publicaciones}
      />
      <Footer />
    </>
  );
}
