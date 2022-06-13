import CartWidget from "./CartWidget";
import "./navbar.css";

export default function NavBar() {
  return (
    
        <nav className="Navbar navbar-expand-lg d-flex ">
          <div className="container row center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="nav-link text-light" aria-current="page">
                    HOMBRE
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link text-light">MUJER</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link text-light" aria-current="page">
                    NIÑOS
                  </button>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link text-light dropdown-toggle"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MARCAS
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <button className="dropdown-item">Nike</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Adidas</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Puma</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>

          <CartWidget />

          </div>
        </nav>
     
  );
}
