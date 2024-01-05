import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const Cartitemcard = () => {
  return (
    <div className="cart-item-card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/of4uydxfme5q5yqfoq1t"/>
        
        <div className="cart-item-details">
        <h1>veg Fried Rice</h1>
        <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"/>veg</p>
        <p>100g</p>
        </div>
        <div className="count-increment">
            <button className="btn-sub">-</button>
            <div>2</div>
            <button className="btn-add">+</button>
            <p>x 120</p>
        </div>
      
      <div className="cart-del-price">
        <button><FontAwesomeIcon icon={faTrash} /></button>
        <p>Rs : 120</p>
      </div>
    </div>
  )
}

export default Cartitemcard
