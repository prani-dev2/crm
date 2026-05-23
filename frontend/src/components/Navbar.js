function Navbar({
  darkMode,
  setDarkMode
}) {

  return (

    <div className="navbar">

      <input
        type="text"
        placeholder="Search..."
        className="navbar-search"
      />

      <div className="navbar-right">

        <button
          className="dark-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >

          {
            darkMode
            ? "☀️"
            : "🌙"
          }

        </button>

        <span className="nav-icon">
          🔔
        </span>

        <span className="nav-icon">
          👤
        </span>

      </div>

    </div>
  );
}

export default Navbar;