import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/api";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch(`${API_URL}/pizzas`);
        if (!res.ok) throw new Error("No se pudieron cargar las pizzas");
        setPizzas(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </PizzaContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePizzas = () => useContext(PizzaContext);
