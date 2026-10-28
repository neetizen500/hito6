import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="container py-5 text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-muted mb-4">
        La ruta que buscas no existe o fue movida. 🍕
      </p>
      <Link to="/" className="btn btn-dark px-4">
        Volver al inicio
      </Link>
    </main>
  );
};

export default NotFound;
