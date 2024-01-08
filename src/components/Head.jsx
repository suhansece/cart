import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightFromBracket,
  faBowlFood,
  faCookieBite,
  faWineGlass,
  faCandyCane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Head = () => {
  const { cart, setCart ,user} = useContext(Context);
  
  return (
    <div className="nav">
      <h1 className="logo"></h1>
      <div className="nav-right">
      <Link className="link"to={'food'}>
          <FontAwesomeIcon className="icon" icon={faBowlFood} />
          <p>Food</p>
          </Link>
        <Link className="link"to={'snacks'}>
          <FontAwesomeIcon className="icon " icon={faCookieBite} />
          <p>Snacks</p>
          </Link>
        <Link className="link"to={'juice'}>
          <FontAwesomeIcon className="icon" icon={faWineGlass} />
          <p>Juice</p>
        </Link>
        <Link className="link"to={'chocolate'}>
       
          <FontAwesomeIcon className="icon" icon={faCandyCane} />
          <p>Chocolate</p>
          </Link>
       
        {user && (<div className="link">
          <button>
            <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
          </button>
          <p>LogOut</p>
        </div>)}
        <div className="link">
          <p className="user-name">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
            {user?(user.name):''}
          </p>
          <p className="balance">Balance Rs:{user?(user.balance):''}/-</p>
          
        </div>
      </div>
      {cart || (
        <div className="nav-cart-icon" onClick={()=>{
          cart?setCart(false):setCart(true);
        }}>
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
        </div>
      )}
    </div>
  );
};

export default Head;
