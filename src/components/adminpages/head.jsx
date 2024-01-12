import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faUser,
  faAdd,
  faPenToSquare,
  faCreditCard,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../App";
import { useContext, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import { isLoggedIn } from "../../auth";


const AdminHead = () => {

  const navigate=useNavigate();
  const logout = ()=>{
        cookie.remove("token");
        navigate("login");
        window.location.reload()
  }
  const isActive = (path) => {
    return location.pathname === path;
  };
  useEffect(()=>{
    if(!isLoggedIn()){
      navigate("admin/login")
    }
  },[])
  return (
    <div className="nav" >
      <h1 className="logo"></h1>
      <div className="nav-right">
      <Link className={`link ${isActive('/admin/addproduct') ? 'active-tab' : ''}`} to={'addproduct'}>
        <FontAwesomeIcon className="icon" icon={faAdd} />
        <p>Add Product</p>
      </Link>
      <Link className={`link ${isActive('/admin') ? 'active-tab' : ''}`} to={''}>
        <FontAwesomeIcon className="icon " icon={faPenToSquare} />
        <p>Products</p>
      </Link>
      <Link className={`link ${isActive('/admin/addmoney') ? 'active-tab' : ''}`} to={'addmoney'}>
        <FontAwesomeIcon className="icon" icon={faCreditCard} />
        <p>Add Balance</p>
      </Link>
      {/* <Link className={`link ${isActive('/admin/history') ? 'active-tab' : ''}`} to={'history'}>
        <FontAwesomeIcon className="icon" icon={faClipboardList} />
        <p>Transaction History</p>
      </Link> */}
        {isLoggedIn()?(<div className="link" onClick={logout}>
          <button >
            <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
          </button>
          <p>LogOut</p>
        </div>):
         (<Link to="login"className="link">
          <button >
            <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
          </button>
          <p>Login</p>
        </Link>)}
        <div className="link">
          <p className="user-name">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
            admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminHead;
