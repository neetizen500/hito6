import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

const Navbar = () => {
  const { total } = useCart();
  const token = false; // simulación: true muestra Profile/Logout

  const linkClass = "btn btn-outline-light btn-sm rounded-pill my-1";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Pizzería Mamma Mia!
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <Link className={linkClass} to="/">
                🍕 Home
              </Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link className={linkClass} to="/profile">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className={linkClass}>🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className={linkClass} to="/login">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClass} to="/register">
                    🔐 Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          <Link
            className="btn btn-outline-info rounded-pill fw-bold ms-lg-auto my-1"
            to="/cart"
          >
            🛒 Total: ${formatCurrency(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
