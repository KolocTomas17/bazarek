const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="http://localhost:3001">
          <img
            src="https://img.obchod.audiolight.dj/images/Bazar.png"
            alt="Bazar"
            width={112}
            height={28}
          />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
