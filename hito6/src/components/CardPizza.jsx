import { formatCurrency } from "../utils/formatCurrency";

const CardPizza = ({ name, price, image, ingredients = [], onAdd }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top pizza-thumb" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-capitalize">{name}</h5>
        <hr />

        <p className="mb-1 text-center text-muted">Ingredientes:</p>
        <ul className="list-unstyled text-center text-capitalize mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr />

        <p className="h5 text-center fw-bold">Precio: ${formatCurrency(price)}</p>

        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-outline-dark">Ver más 👀</button>
          <button className="btn btn-dark" onClick={onAdd}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
