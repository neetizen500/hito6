// Por ahora el email es estático; en los siguientes hitos vendrá de la autenticación.
const Profile = () => {
  const email = "test@test.com";

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-sm text-center p-4">
            <div className="display-1">👤</div>
            <h2 className="fw-bold mt-2">Profile</h2>
            <p className="text-muted mb-4">
              Email: <span className="fw-semibold text-dark">{email}</span>
            </p>
            <button className="btn btn-dark px-4 mx-auto">Cerrar sesión</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
