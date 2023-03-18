import { Context } from "../../Context/Context";
import { useContext } from "react";
import Footer from "../../layouts/Footer";
import { useNavigate } from "react-router-dom";

export default function Productos() {
  const navigate = useNavigate();
  const { dato } = useContext(Context);
  const productos = dato.products;
  console.log(productos);
  return (
    <>
      <h6 className="text-center mt-5"> Productos</h6>
      <div className="row justify-content-center">
        {productos?.map((item, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
              <div className="card-body">
                <div
                  style={{
                    backgroundImage: `url(${item.productUrl})`,
                    width: "100%",
                    height: "150px",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="textos-cartas mt-3">
                  <h5 className="card-title">{item.nombre}</h5>
                  {/* <div class="card-text">$Precio: {item.precio}</div> */}
                  <p className="card-text">$Precio: {item.precio}</p>
                </div>
                <button
                  className="btn btn-primary btn-block mt-3"
                  onClick={() => navigate(`/auto/${item.id}`)}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
          
    </>
  );
}
