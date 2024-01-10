import axios from "axios";
import { useState } from "react";
const AdminproductCard = (props) => {
  const { data, fetchProduct } = props;
  const [updatedQuantity, setUpdatedQuantity] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

  const handleQuantityUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`api/product/setquantity/${data._id}`, {
        quantity: updatedQuantity,
      });
      console.log("Updated Quantity:", updatedQuantity);
      fetchProduct();
    } catch (e) {
      console.error("Error updating quantity:", e);
    }
    setUpdatedQuantity("");
  };

  const handlePriceUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`api/product/updateprice/${data._id}`, {
        price: updatedPrice,
      });
      console.log("Updated Price:", updatedPrice);
      fetchProduct();
    } catch (e) {
      console.error("Error updating price:", e);
    }
    setUpdatedPrice("");
  };

  const handleDelete = async () => {
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
        <img  src={data.image}/>
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
