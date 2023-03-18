import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Seguimientos() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy pagina de seguimientos</h1>
    </>
  );
}
