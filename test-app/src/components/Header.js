import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../custom-hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


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

  const isOnline = useOnlineStatus();

  const { user } = useContext(UserContext);

  const cartItems=useSelector((store)=>store.cart.items)
 

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
            <Link to={"/Instamart"}>Instamart</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart- {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      {isOnline ? <h4>Online</h4> : <h4>Offline</h4>}
      {user.name}
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
