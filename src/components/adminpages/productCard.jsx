import axios from "axios";
import { useContext, useState } from "react";
import { isLoggedIn } from "../../auth";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
const AdminproductCard = (props) => {
  const { data, fetchProduct } = props;
  const [updatedQuantity, setUpdatedQuantity] = useState(data.quantity);
  const [updatedPrice, setUpdatedPrice] = useState(data.price);
  const {setNoti}=useContext(Context);
const navigate =useNavigate();
  const handleQuantityUpdate = async (e) => {
    e.preventDefault();
    if(!isLoggedIn()){
      navigate('login');
    }
    try {
      await axios.put(`api/product/setquantity/${data._id}`, {
        quantity: updatedQuantity,
      });
      setNoti('Updated');
      fetchProduct();
    } catch (e) {
      console.error("Error updating quantity:", e);
    }
  
  };

  const handlePriceUpdate = async (e) => {
    e.preventDefault();
    if(!isLoggedIn()){
      navigate('login');
    }
    try {
      await axios.put(`api/product/updateprice/${data._id}`, {
        price: updatedPrice,
      });
      setNoti('Updated');
      fetchProduct();
    } catch (e) {
      console.error("Error updating price:", e);
    }
   
  };

  const handleDelete = async () => {
    if(!isLoggedIn()){
      navigate('login');
    }
    try {
      await axios.delete(`api/product/delete/${data._id}`);
      console.log("Product deleted successfully");
      fetchProduct();
    } catch (e) {
      console.error("Error deleting product:", e);
    }
  };

  return (
    <tr className="admin-product-card">
      <td className="card-img">
        <img  src={data.image||"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/of4uydxfme5q5yqfoq1t"}/>
        {data.name}
      </td>
      <td>{data.category}</td>
      <td>
        {data.price}
        <div className="update-product">
          <input
            type="number"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
          />
          <button onClick={handlePriceUpdate} type="submit">
            Update
          </button>
        </div>
      </td>
      <td>
        {data.quantity}
        <div className="update-product">
          <input
            type="number"
            value={updatedQuantity}
            onChange={(e) => setUpdatedQuantity(e.target.value)}
          />
          <button onClick={handleQuantityUpdate} type="submit">
            Update
          </button>
        </div>
      </td>
      <td>{data.type}</td>
      <td>{data.details}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default AdminproductCard;