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

        

      </div>

    </div>
  );
}

export default Navbar;