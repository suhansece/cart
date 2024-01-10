import { useContext} from "react";
import { Context } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Itemcard = (props) => {
  const { data } = props;
  const { fetchUser,user } = useContext(Context);
const navigate =useNavigate();
  const addToCart = async () => {
    if(user){
     await axios.put("api/user/addtocart", { _id: data._id });
    fetchUser();
    }else{
      navigate("/login");
    }
    
};

  return (
    <div className="item-card">
      <img className="item-img"src={data.image||"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/of4uydxfme5q5yqfoq1t"}/>
      <div>
        <h1>{data.name}</h1>
      </div>
      <div>
        <p>Rs:{data.price}/-</p>
      </div>
      <div className="veg-nonveg">
        {data.type === "veg" ? (
          <p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png " />
            veg
          </p>
        ) : (
          <p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg" />
            Non-Veg
          </p>
        )}
      </div>
      <div>
        <p>{data.details}</p>
      </div>
      <div>
        <p>Available Count : {data.quantity}pcs</p>
      </div>
      <button className="add-to-cart-btn" onClick={addToCart} >Add to Cart</button>
    </div>
  );
};

export default Itemcard;
