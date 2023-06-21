import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../custom-hooks/useOnlineStatus";

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

  const isOnline=useOnlineStatus()
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
          <li>
            <Link to={"/Instamart"}>Instamart</Link>
          </li>
        </ul>
      </div>
      {isOnline?<h4>Online</h4>:<h4>Offline</h4>}
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
