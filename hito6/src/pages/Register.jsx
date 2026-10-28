import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setMessage({
        type: "danger",
        text: "Todos los campos son obligatorios.",
      });
      return;
    }

    if (password.length < 6) {
      setMessage({
        type: "danger",
        text: "La contraseña debe tener al menos 6 caracteres.",
      });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({
        type: "danger",
        text: "Las contraseñas no coinciden.",
      });
      return;
    }

    setMessage({ type: "success", text: "¡Registro exitoso!" });
  };

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-5 col-lg-4 py-5">
          <h2 className="fw-bold mb-4">Register</h2>

          {message && (
            <div className={`alert alert-${message.type}`} role="alert">
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="registerEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="registerPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="registerPassword"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="registerConfirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="registerConfirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary px-4">
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
