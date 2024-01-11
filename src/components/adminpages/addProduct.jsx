import axios from 'axios';
import { useState } from 'react';
import { isLoggedIn } from '../../auth';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate =useNavigate()
  const [productInfo, setProductInfo] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    type: '',
    details: '',
    image: '',
  });

  const onChangeField = (fieldName, value) => {
    setProductInfo({ ...productInfo, [fieldName]: value });
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductInfo({ ...productInfo, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if(!isLoggedIn()){
      navigate('login');
    }
    try {
      await axios.post('/api/product/add', productInfo);
      setProductInfo({
        name: '',
        category: 'food',
        price: 0,
        quantity: 0,
        type: 'veg',
        details: '',
        image: '',
      });
    } catch (e) {
      console.error(e);
    }
  };

  
  return (
    <div className='add-product'>
      <div className="container">
        <h1>Add Product</h1>
        <form>
          <input
            value={productInfo.name}
            placeholder="Product Name"
            onChange={(e) => onChangeField('name', e.target.value)}
          />
          <select
            value={productInfo.category}
            onChange={(e) => onChangeField('category', e.target.value)}
          >
            <option value="food">Food</option>
            <option value="snacks">Snacks</option>
            <option value="chocolate">Chocolate</option>
            <option value="juice">Juice</option>
          </select>
          <input
            value={productInfo.price}
            placeholder="Price"
            type='number'
            onChange={(e) => onChangeField('price', e.target.value)}
          />
          <input
            value={productInfo.quantity}
            placeholder="Quantity"
            type='number'
            onChange={(e) => onChangeField('quantity', e.target.value)}
          />
          <select
            value={productInfo.type}
            onChange={(e) => onChangeField('type', e.target.value)}
          >
            <option value="veg">veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
          <input
            value={productInfo.details}
            placeholder="Product Details"
            onChange={(e) => onChangeField('details', e.target.value)}
          />
           <input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className='img-input'
          />
          <button type="submit" onClick={(e) => submitForm(e)}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
