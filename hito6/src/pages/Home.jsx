import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useCart } from "../context/CartContext";
import { usePizzas } from "../context/PizzaContext";

const Home = () => {
  const { pizzas, loading, error } = usePizzas();
  const { addToCart } = useCart();

  return (
    <main className="container">
      <Header />

      {loading && <p className="text-center my-5">Cargando pizzas...</p>}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}. Verifica que el backend esté levantado en el puerto 5000.
        </div>
      )}

      <section className="row g-4 pb-5">
        {pizzas.map((pizza) => (
          <div className="col-12 col-sm-6 col-lg-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              image={pizza.img}
              ingredients={pizza.ingredients}
              onAdd={() => addToCart(pizza)}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
