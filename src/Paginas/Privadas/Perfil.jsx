import { Context } from "../../Context/Context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

export default function Login() {
  const { inicioseccion } = useContext(Context);
  if (!inicioseccion) {
    swal({
      title: "Error",
      text: "DEBES LOGEARTE PRIMERO",
      icon: "error",
      button: false,
    });
    setTimeout(() => {
      swal.close();
    }, 2000);

    return <Navigate to="/perfil_demo" replace={true} />;
  }
  return (
    <>
      <h1>soy la pagina de perfil</h1>
    </>
  );
}
