import { useEffect, useState } from "react";
import AdminproductCard from "./productCard";
import axios from "axios";
import AddProduct from "./addProduct";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const [products, setProduct] = useState([]);
  const navigate=useNavigate()

  const fetchProduct = async () => {
    const data = await axios.get(`api/product`);
    setProduct(data.data);
    
  };
 
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="admin-home">
      <button className="admin-logout"onClick={()=>{
        Cookies.remove('token');
        navigate('login');
      }}>Logout</button>
      <table>
        <thead>
        <tr>
           <th className="table-header">Name</th>
            <th className="table-header">Category</th>
            <th className="table-header">Price</th>
            <th className="table-header">Quantity</th>
            <th className="table-header">Type</th>
            <th className="table-header">Details</th>
            <th className="table-header">Delete</th>
        </tr>
        </thead>
        <tbody>
        {products.map((product) => (
            <AdminproductCard key={product._id} data={product} fetchProduct={fetchProduct} />
          ))}
        </tbody>
      </table>
     <AddProduct/>
    </div>
  );
};

export default AdminHome;
