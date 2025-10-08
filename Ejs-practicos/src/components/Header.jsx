import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <span className="logo-principal">🛒</span>
          <h1>Detutti Store</h1>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;