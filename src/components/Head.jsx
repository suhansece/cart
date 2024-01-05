import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightFromBracket,
  faBowlFood,
  faCookieBite,
  faWineGlass,
  faCandyCane,
  faUser
} from "@fortawesome/free-solid-svg-icons";
const Head = () => {
  return (
    <div className="nav">
      <h1 className="logo"></h1>
      <div className="nav-right">
        <div>
          <FontAwesomeIcon className="icon" icon={faBowlFood} />
          <p>Food</p>
        </div>
        <div>
          <FontAwesomeIcon className="icon "icon={faCookieBite} />
          <p>Snacks</p>
        </div>
        <div>
          <FontAwesomeIcon className="icon"icon={faWineGlass} />
          <p>Juice</p>
        </div>
        <div>
          <FontAwesomeIcon className="icon"icon={faCandyCane} />
          <p>Chocolate</p>
        </div>
        <div>
          <FontAwesomeIcon className="icon"icon={faCartShopping} />
          <p>Cart</p>
        </div>
        <div>
        <button>
        <FontAwesomeIcon className="icon"icon={faRightFromBracket} />
        </button>
        <p>Logo</p>
        </div>
        <div>
        <p className="user-name"><FontAwesomeIcon className="user-icon"icon={faUser} />Sam123</p>
        </div>
        
      </div>
    </div>
  );
};

export default Head;
