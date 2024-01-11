import { useContext, useEffect, useState } from "react";
import Cart from "./cart";
import Itemcard from "./itemcard";
import axios from "axios";
import { Context } from "../App";

const Body = (props) => {
  const [products, setProduct] = useState([]);
  const { cart } = useContext(Context);
  const [search,setSearch]=useState('')
  const {datas}=props;
  const fetchProduct = async () => {
    const data = await axios.get(`api/product/category/${datas}`);
    setProduct(data.data);
    
  };
  const searchProduct =(e)=>{
      setSearch(e.target.value);
  }
  useEffect(() => {
    fetchProduct();
  }, [datas]);

  return (
    <div className="body">
      <div className="items">
        <input onChange={(e)=>searchProduct(e)}className="search" placeholder="Search Product"/>
        <h1>{datas.toUpperCase()}</h1>
        <div className="meanu-list">
          {products.filter((t)=>t.name.toLowerCase().includes(search.toLowerCase())).map((product, index) => (
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
