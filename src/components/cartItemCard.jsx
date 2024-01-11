import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";

const Cartitemcard = (props) => {
  const { data } = props;
  const [product, setProduct] = useState();
  const { fetchUser } = useContext(Context);
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`api/product/${data.cartitems}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  const addToCartCount = async () => {
    if(data.noOfItems>1){
    await axios.put(`api/user/addnoofitems/${data._id}`, {
      noOfItems: data.noOfItems - 1,
    });
  }else{
    deleteitem();
  }
    fetchUser();
  };
  const subToCartCount = async () => {
    await axios.put(`api/user/addnoofitems/${data._id}`, {
      noOfItems: data.noOfItems + 1,
    });
    fetchUser();
  };

  const deleteitem=async ()=>{
    await axios.put(`api/user/deletefromcart/${data.cartitems}`)
    fetchUser();
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  if(!product){
    return(<>no data</>)
  }
  return (
    <div className="cart-item-card">
      <img src={product.image||"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/of4uydxfme5q5yqfoq1t"} />

      <div className="cart-item-details">
        <h1>{product.name}</h1>
        {product.type === "veg" ? (
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
        <p>{product.details}</p>
      </div>
      <div className="count-increment">
        <button className="btn-sub" onClick={addToCartCount}>
          -
        </button>
        <div>{data.noOfItems}</div>
        <button className="btn-add" onClick={subToCartCount}>
          +
        </button>
        <p>x {product.price}</p>
      </div>

      <div className="cart-del-price">
        <button onClick={deleteitem}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <p>Rs : {product.price*data.noOfItems}</p>
      </div>
    </div>
  );
};

export default Cartitemcard;
