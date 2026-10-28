import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { API_URL } from "../utils/api";
import { formatCurrency } from "../utils/formatCurrency";

// Por ahora el id es fijo; en el siguiente hito será dinámico.
const PIZZA_ID = "p001";

const Pizza = () => {
  const { addToCart } = useCart();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`${API_URL}/pizzas/${PIZZA_ID}`);
        if (!res.ok) throw new Error("No se pudo cargar la pizza");
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPizza();
  }, []);

  if (loading) return <p className="text-center my-5">Cargando pizza...</p>;

  if (error || !pizza) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          {error || "Pizza no encontrada"}. Verifica que el backend esté
          levantado en el puerto 5000.
        </div>
      </div>
    );
  }

  return (
    <main className="container my-5">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-12 col-md-6">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid w-100 h-100 pizza-detail-img"
            />
          </div>

          <div className="col-12 col-md-6">
            <div className="card-body p-4 d-flex flex-column h-100">
              <h2 className="fw-bold text-capitalize">{pizza.name}</h2>
              <hr />
              <p className="text-muted">{pizza.desc}</p>

              <h5 className="mt-2">Ingredientes:</h5>
              <ul className="text-capitalize">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>

              <div className="mt-auto d-flex justify-content-between align-items-center">
                <span className="h4 fw-bold mb-0">
                  Precio: ${formatCurrency(pizza.price)}
                </span>
                <button className="btn btn-dark" onClick={() => addToCart(pizza)}>
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pizza;
