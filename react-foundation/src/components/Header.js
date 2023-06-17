import { useState } from "react";
import { Link } from "react-router-dom";

const authentication = () => {
  return true;
};

const Logo = () => (
  <a href="/" className="logo">
    <h1>Swagger Food</h1>
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <>
        <Logo />
      </>
      <div className="nav-links">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/about"}>About</Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>

          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LogOut
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          LogIn
        </button>
      )}
    </div>
  );
};
export default Header;
