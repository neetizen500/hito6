import headerBg from "../assets/header-bg.png";

const Header = () => {
  return (
    <header
      className="text-center text-white rounded-3 my-4 header-hero d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <h1 className="fw-bold">🍕 Pizzería Mamma Mia!</h1>
      <p className="lead mb-0 px-3">
        Las mejores pizzas artesanales de la ciudad, hechas con ingredientes
        frescos y mucho amor. ¡Elige tu favorita y disfruta!
      </p>
    </header>
  );
};

export default Header;
