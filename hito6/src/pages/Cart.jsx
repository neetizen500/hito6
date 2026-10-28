import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useCart();

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h4 className="fw-bold mb-4">Detalles del pedido:</h4>

          {cart.length === 0 ? (
            <p className="text-muted">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between mb-3"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="cart-thumb rounded"
                  />
                  <span className="text-capitalize">{item.name}</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <span className="fw-semibold">
                    ${formatCurrency(item.price)}
                  </span>

                  <button
                    className="btn btn-outline-danger btn-sm rounded-circle cart-qty-btn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <span className="fw-bold">{item.count}</span>

                  <button
                    className="btn btn-outline-primary btn-sm rounded-circle cart-qty-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}

          <hr />

          <h4 className="fw-bold my-4">Total: ${formatCurrency(total)}</h4>

          <button className="btn btn-dark px-4" disabled={cart.length === 0}>
            Pagar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
