import React from "react";
import { AESDecrypt } from "../utils/encrypt";

const Perfil = () => {
  const getLocalAccessToken = () => {
    const accessToken = AESDecrypt(localStorage.getItem("token"));
    return accessToken;
  };
  const ver = () => {
    const token = getLocalAccessToken();
    console.log(token);
  };
  return (
    <div>
      <h1>Perfil Logueado</h1>
      <button className="btn btn-light mt-3" onClick={ver}>
        Ver token
      </button>
    </div>
  );
};

export default Perfil;