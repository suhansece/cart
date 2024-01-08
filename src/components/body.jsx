import { useContext, useEffect, useState } from "react";
import Cart from "./cart";
import Itemcard from "./itemcard";
import axios from "axios";
import { Context } from "../App";

const Body = (props) => {
  const [products, setProduct] = useState([]);
  const { cart } = useContext(Context);
  const {datas}=props
  const fetchProduct = async () => {
    const data = await axios.get(`api/product/category/${datas}`);
    setProduct(data.data);
  };
  useEffect(() => {
    fetchProduct();
  }, [datas]);

  return (
    <div className="body">
      <div className="items">
        <h1>{datas.toUpperCase()}</h1>
        <div className="meanu-list">
          {products.map((product, index) => (
            <Itemcard key={index} data={product} />
          ))}
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

export default Body;
