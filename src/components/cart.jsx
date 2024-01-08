import Cartitemcard from "./cartitemcard";
import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const { cart, setCart, user, fetchUser } = useContext(Context);
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState();
  const fetchProduct = async (data) => {
    try {
      const response = await axios.get(`api/product/${data.cartitems}`);
      return response.data.price;
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  const checkOut = async () => {
    try {
      await axios.get("api/user/buy");
      fetchUser();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMsg("Invalid Balance");
      } else {
        console.error("Error fetching product:", error);
      }
    }
  };
  useEffect(() => {
    const calculateTotal = async () => {
      let newTotal = 0;
      if (user) {
        for (const item of user.cart) {
          const productPrice = await fetchProduct(item);
          newTotal += productPrice * item.noOfItems;
        }
        setTotal(newTotal);
      }
    };

    calculateTotal();
  }, [user]);

  return (
    <div className="cart">
      <h1>Shoping cart</h1>
      <button
        className="cart-close-btn"
        onClick={() => {
          cart ? setCart(false) : setCart(true);
        }}
      >
        close
      </button>
      <div className="cart-list">
        {user &&
          user.cart.map(
            (item) =>
              item.noOfItems > 0 && <Cartitemcard data={item} key={item._id} />
          )}
      </div>
      <div className="checkout-details">
        <div className="sub-total">
          Sub-Total
          <p>2 items</p>
        </div>
        <div className="total-price">Rs:{total}</div>
        <button onClick={checkOut}>Checkout</button>
        <p className="error-msg">{msg}</p>
      </div>
    </div>
  );
};

export default Cart;
