import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Compras() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy compras</h1>
    </>
  );
}
