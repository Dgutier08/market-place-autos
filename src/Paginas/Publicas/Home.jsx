import { Context } from "../../Context/Context";
import { useContext } from "react";
import Footer from "../../layouts/Footer";
import { useNavigate } from "react-router-dom";
import img1 from "../../Components/assets/Img/banner1.jpg";
import img2 from "../../Components/assets/Img/banner2.jpg";
import img3 from "../../Components/assets/Img/Banner3.jpg";
import img4 from "../../Components/assets/Img/banner4.jpg";
import img5 from "../../Components/assets/Img/banner5.jpg";

export default function Home() {
  const navigate = useNavigate();
  const { dato } = useContext(Context);
  const productos = dato.products;

  return (
    <>
      <div className="container-fluid">
        <section className="contenedor-main row align-items-center">
          <aside className="col-md-2">
            <h3>Menu</h3>
            <div className="menu-aside">
              <div className="menus">
                {/* <button className="boton-aside-menu">Camionetas</button> */}
                {/* <button className="boton-aside-menu">Autos</button> */}
                {/* <button className="boton-aside-menu">Petroleros</button>
                <button className="boton-aside-menu">Bencineros</button> */}
                <button type="button-aside" class="btn btn-info">
                  Petroleros
                </button>
                <button type="button-aside" class="btn btn-info">
                  bencineros
                </button>
                <button type="button-aside" class="btn btn-info">
                  Camionetas
                </button>
                <button type="button-aside" class="btn btn-info">
                  autos
                </button>
                <img src={img1} alt="" className="banner1-aside" />
                <img src={img2} alt="" className="banner1-aside" />
                <img src={img3} alt="" className="banner1-aside" />
                <img src={img4} alt="" className="banner1-aside" />
                <img src={img5} alt="" className="banner1-aside" />
                <h5 style={{ color: "#ffff" }}>buscanos siempre</h5>
                <img
                  src="https://newwweb.net/sites/default/files/2020-03/contacto.jpg "
                  alt=""
                  className="banner1-aside2"
                />
              </div>
            </div>
          </aside>

          <main className="col-md-10">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://www.nissanframework.com/resourcefiles/g-vehicle-detail-gallery-images/gallery-photo-4-nissan-sentra.jpg"
                      className="imagen-slider d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption  d-md-block">
                      <h5
                        style={{
                          color: "#ffff",
                        }}
                      >
                        First slide label
                      </h5>
                      <p
                        style={{
                          color: "#05625F",
                        }}
                      >
                        nuevos modelos
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="carousel-item">
                      <img
                        src="https://admin.kovacs.ecrm.cl/files/bms_producto_mutimedia/1007/1.png"
                        className=" imagen-slider d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption  d-md-block">
                        <h5>Second slide label</h5>
                        <p>nuevos modelos</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://www.elcarrocolombiano.com/wp-content/uploads/2020/06/20200609-TOYOTA-YARIS-SPORT-MECANICO-COLOMBIA-2021-PRECIO-CARACTERISTICAS-02.jpg"
                        className=" imagen-slider d-block w-100"
                        alt="..."
                      />

                      <div className="carousel-caption d-md-block">
                        <h5>Third slide label</h5>
                        <p
                          style={{
                            color: "#05625F",
                          }}
                        >
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev "
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon btn btn-dark"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon btn btn-dark"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="row">
              {productos?.map((intem, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <div className="card">
                    <div
                      style={{
                        backgroundImage: `url(${intem.productUrl})`,
                        width: "100%",
                        height: "130px",
                        backgroundSize: "cover",
                      }}
                      className="card-img-top"
                    ></div>
                    <div className="card-body">
                      <h5 className="card-title">{intem.nombre}</h5>
                      <p className="card-text">{intem.marca}</p>
                      <p className="card-text">{intem.propietario}</p>
                      {/* <p className="card-text">{intem.tipo_de_combustible}</p> */}
                      <p className="card-text">$Precio: {intem.precio}</p>
                      <p className="card-text">{intem.kilometros}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/auto/${intem.id}`)}
                      >
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="banner-padre row">
              <div className="imagen col">
                <img
                  src="https://www.hyundai.cl/content/uploads/1170x539.jpg"
                  alt=""
                  width="300"
                  height="200"
                />
              </div>
              <div className="banner-parrafo col">
                <p>Lorem Ipsum</p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                </p>
                <buton
                  className="boton-parrafo-banner"
                  onClick={() => navigate(`/productos`)}
                >
                  Explora
                </buton>
              </div>
            </div>

            <div className="banner-padre row">
              <div className="imagen col">
                <div className="banner-parrafo2 col">
                  <br />
                  <p>Lorem Ipsum</p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look
                  </p>
                </div>
                {/* <img
                  src="https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/hyundai_tucson.jpg?itok=78HgheST"
                  alt=""
                  width="300"
                  height="200"
                />
                <buton
                  className="boton-parrafo-banner"
                  onClick={() => navigate(`/productos`)}
                >
                  Explora
                </buton> */}
              </div>
            </div>
          </main>
        </section>
        <Footer />
      </div>
          
    </>
  );
}
