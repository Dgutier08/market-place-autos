import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Productosquetegustan() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy productos que te gustan</h1>
    </>
  );
}
