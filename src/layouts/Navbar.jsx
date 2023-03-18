import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i class="fa-solid fa-house fa-fw" title="Home"></i>
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/productos" aria-current="true">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registrarse">
                Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formulario">
                LogIn
                <a>
                  {" "}
                  <i class="fas fa-user"></i>
                  <span></span>
                </a>
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
        <a class="nav-link nav-item me-3 me-lg-4" href="#Detalleproducto">
          <span class="badge badge-pill bg-danger">1</span>
          <span>
            <i class="fas fa-shopping-cart"></i>
          </span>
        </a>
      </div>
    </nav>
  );
}
