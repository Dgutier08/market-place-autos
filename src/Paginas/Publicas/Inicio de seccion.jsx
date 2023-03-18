import { Context } from "../../Context/Context";
import { useContext } from "react";
import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AESEncrypt } from "../../utils/encrypt";
import { useForm } from "react-hook-form";
export default function Login() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setInicioseccion } = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (evento) => {
    console.log(evento);
    setTimeout(() => {
      if (evento != "") {
        document.getElementById("formulario").reset();
      }
    }, 2000);
  };

  const login = async () => {
    const objeto = {
      email: userName,
      password: password,
    };
    try {
      const accessUser = await axios.post(
        "http://localhost:3000/login",
        objeto
      );
      swal({
        title: "Success",
        text: " usuario exitoso",
        icon: "success",
        button: false,
      });
      setTimeout(() => {
        swal.close();
      }, 2000);
      localStorage.setItem("tk", AESEncrypt(accessUser.data.token));
      setInicioseccion(true);
      navigate("/perfil");
    } catch (error) {
      swal({
        title: "Error",
        text: "Usuario no registrado",
        icon: "error",
        button: false,
      });
      setTimeout(() => {
        swal.close();
      }, 2000);
    }
  };

  return (
    <>
      <h1>Formulario Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        <div>
          <span clasclassName="hijos-formulario">
            <div class="mb-3 ">
              <input
                type="email"
                placeholder="ingrese tu correo :)"
                className="input input-bordered input-xs w-full max-w-xs"
                name="email"
                onChange={(e) => setUserName(e.target.value)}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Necesitas este campo 😟",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto 😟 ",
                  },
                })}
              />

              <div id="emailHelp" className="form-text">
                {errors.email && (
                  <span className="c">{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Type here your password"
                className="input input-bordered input-xs w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es requerida 😟",
                  },
                  minLength: {
                    value: 6,

                    message:
                      "La contraseña debe tener al menos 6 caracteres 😟",
                  },
                })}
              />
            </div>
            <div className="mb-3 form-check">
              <label className="form-check-label" for="exampleCheck1">
                {errors.password && <span>{errors.password.message}</span>}
              </label>
            </div>

            <button
              type="submit"
              value="submit"
              className="btn btn-primary"
              onClick={login}
            >
              Iniciar seccion
            </button>
          </span>
        </div>
      </form>
    </>
  );
}
