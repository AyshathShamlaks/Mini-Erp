function Navbar({
  username,
  handleLogout,
}) {

  return (

    <div className="navbar">

      <h2>
        ERP Dashboard
      </h2>

      <div>

        <span>
          Welcome, {username}
        </span>

        <button
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;