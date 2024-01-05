import Cartitemcard from "./cartitemcard"

const Cart = () => {
  return (
    <div className="cart">
        <h1>Shoping cart</h1>
      <div className="cart-list">
      <Cartitemcard/>
      <Cartitemcard/>
     <Cartitemcard/>
      </div>
      <div className="checkout-details">
        <div className="sub-total">
            Sub-Total
            <p>2 items</p>
        </div>
        <div className="total-price">
            Rs:650
        </div>
        <button>Checkout</button>
      </div>

    </div>
  )
}

export default Cart
