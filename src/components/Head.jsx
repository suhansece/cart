import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightFromBracket,
  faBowlFood,
  faCookieBite,
  faWineGlass,
  faCandyCane,
  faUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../App";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import { isLoggedIn } from "../auth";

const Head = () => {
  const { cart, setCart, user, setUser, cartCount,setNoti } = useContext(Context);
  const navigate = useNavigate();
  const logout = () => {
    cookie.remove("token");
    setUser(null);
    navigate("/login");
    setNoti('Logouted')
  
  };
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="nav">
      <h1 className="logo"></h1>
      <div className="nav-right">
        <Link
          className={`link ${isActive("/food") ? "active-tab" : ""}`}
          to={"food"}
        >
          <FontAwesomeIcon className="icon" icon={faBowlFood} />
          <p>Food</p>
        </Link>
        <Link
          className={`link ${isActive("/snacks") ? "active-tab" : ""}`}
          to={"snacks"}
        >
          <FontAwesomeIcon className="icon " icon={faCookieBite} />
          <p>Snacks</p>
        </Link>
        <Link
          className={`link ${isActive("/juice") ? "active-tab" : ""}`}
          to={"juice"}
        >
          <FontAwesomeIcon className="icon" icon={faWineGlass} />
          <p>Juice</p>
        </Link>
        <Link
          className={`link ${isActive("/chocolate") ? "active-tab" : ""}`}
          to={"chocolate"}
        >
          <FontAwesomeIcon className="icon" icon={faCandyCane} />
          <p>Chocolate</p>
        </Link>

        {user && (
          <div className="link" onClick={logout}>
            <button>
              <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            </button>
            <p>LogOut</p>
          </div>
        )}
        {user ? (
          <></>
        ) : (
          <Link to="/login" className="link">
            <button>
              <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            </button>
            <p>Login</p>
          </Link>
        )}
        <div className="link">
          <p className="user-name">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
            {user ? user.name : ""}
          </p>
          <p className="balance">Balance Rs:{user ? user.balance : ""}/-</p>
        </div>
      </div>
      {cart || (
        <div
          className="nav-cart-icon"
          onClick={() => {
            if (isLoggedIn()) {
              cart ? setCart(false) : setCart(true);
            } else {
              navigate("/login");
            }
          }}
        >
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
          {cartCount}
        </div>
      )}
    </div>
  );
};

export default Head;
