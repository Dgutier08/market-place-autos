import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "./context/AuthContexProvider.jsx";

const Form = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setIsAuth } = React.useContext(AuthContex);

  const navigate = useNavigate();
  const login = async () => {
    try {
      const accessUser = await axios.post("http://localhost:3000/login", {
        email: userName,
        password: password,
      });
      swal({
        title: "Success",
        text: "User or password correct",
        icon: "success",
        button: false,
      });
      setTimeout(() => {
        swal.close();
      }, 2000);
      localStorage.setItem("tk", accessUser.data.token);
      setIsAuth(true);
      navigate("/events");
    } catch (error) {
      console.log(error);
      swal({
        title: "Error",
        text: "User or password incorrect",
        icon: "error",
        button: false,
      });
      setTimeout(() => {
        swal.close();
      }, 2000);
    }
  };
  return (
    <div className="flex items-center justify-center gap-1 my-3 input-group ">
      <input
        type="email"
        placeholder="Type here your user email"
        className="input input-bordered input-xs w-full max-w-xs"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Type here your password"
        className="input input-bordered input-xs w-full max-w-xs"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button className="btn" onClick={login}>
          Button
        </button>
      </div>
    </div>
  );
};

export default Form;
