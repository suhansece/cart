import axios from "axios";
import { useEffect, useState } from "react";
import AdminproductCard from "./productCard";

const AdminProductList = () => {
  const [products, setProduct] = useState([]);
  const fetchProduct = async () => {
    const data = await axios.get(`api/product`);
    setProduct(data.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="admin-product-lists">
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
            <AdminproductCard
              key={product._id}
              data={product}
              fetchProduct={fetchProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
