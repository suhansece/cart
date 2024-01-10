import { useContext, useEffect, useState } from "react";
import Cart from "./cart";
import Itemcard from "./itemcard";
import axios from "axios";
import { Context } from "../App";
const Homebody = () => {
  const [products, setProduct] = useState([]);
  const { cart } = useContext(Context);

  const fetchProduct = async () => {
    const data = await axios.get("api/product");
    setProduct(data.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="body">
      <div className="home-body">
      <div className="itemss">
        <h1>Foods</h1>
        <div className="meanu-liste">
          {products.filter((product)=>product.category==="food").map((product) => (
            <Itemcard key={product._id} data={product} />
          ))}
        </div>
      </div>
      <div className="itemss">
        <h1>Snacks</h1>
        <div className="meanu-liste">
          {products.filter((product)=>(product.category)=="snacks").map((product) => (
            <Itemcard key={product._id} data={product} />
          ))}
        </div>
      </div>
      <div className="itemss">
        <h1>Juice</h1>
        <div className="meanu-liste">
          {products.filter((product)=>product.category==="juice").map((product) => (
            <Itemcard key={product._id} data={product} />
          ))}
        </div>
      </div>
      <div className="itemss">
        <h1>Chocolate</h1>
        <div className="meanu-liste">
          {products.filter((product)=>product.category==="chocolate").map((product) => (
            <Itemcard key={product._id} data={product} />
          ))}
        </div>
      </div>
      
      </div>
      {cart && (
        <div className="cart-div">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Homebody;
