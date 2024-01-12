import React, { useEffect, useState } from "react";
import "./App.css";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Head from "./components/Head";
import Body from "./components/body";
import axios from "axios";
import Login from "./components/login";
import Register from "./components/register";
import Homebody from "./components/homebody";
import AdminHome from "./components/adminpages/home";
import AdminLogin from "./components/adminpages/login";
import AdminRegister from "./components/adminpages/register";
import {isLoggedIn} from "./auth";
import Bill from "./components/bill";
import AddProduct from "./components/adminpages/addProduct";
import AdminProductList from "./components/adminpages/productList";
import AddBalance from "./components/adminpages/addBalance";
import AdminHistory from "./components/adminpages/history";
import Notification from "./components/notification";

export const Context =React.createContext();
function Home() {
 
  return (
    <>
    <Head/>
    <Outlet/>
    </>
  );
}
const router =createBrowserRouter([
  {
    path:"/",
    element :<Home/>,
    children:[{
      path:"/",
      element:<Homebody/>
    },{
      path:"/food",
      element:<Body datas={'food'}/>
    },{
      path:"/snacks",
      element:<Body datas={'snacks'}/>
    },{
      path:"/juice",
      element:<Body datas={'juice'}/>
    },{
      path:"/chocolate",
      element:<Body datas={'chocolate'}/>
    },{
      path:"/bill",
      element:<Bill/>
    }] 
  },{
    path:"/login",
    element:<Login/>
  },{
    path:"/register",
    element:<Register/>
  },{
    path:"/admin",
    element:<AdminHome/>,
    children:[
      {
        path:"/admin",
        element:<AdminProductList/>
      }
      ,{
      path:"/admin/addproduct",
      element:<AddProduct/>
    },{
      path:"/admin/addMoney",
      element:<AddBalance/>
    },{
      path:"/admin/history",
      element:<AdminHistory/>
    }
      ]
  },{
    path:'/admin/login',
    element:<AdminLogin/>
  },{
    path:'/admin/register',
    element:<AdminRegister/>
  }
]);

const App=()=>{
  const[cart,setCart]=useState(false);
  const [user,setUser]=useState();
  const[bill,setBill]=useState();
  const[cartCount,setCartCount]=useState(0);
  const[noti,setNoti]=useState('');
  const [admin,setAdmin]=useState();

  const fetchUser=async()=>{
    if(isLoggedIn()){
      const user =await axios.get('api/user');
      setUser(user.data);
      setCartCount(user.data.cart.length);
    }
  }


useEffect(()=>{
  fetchUser();
  console.log();
},[])

  return(
  <Context.Provider value={{cart,setCart,fetchUser,admin,setAdmin,user,setUser,bill,setBill,cartCount,setCartCount,noti,setNoti}}>
  <RouterProvider router={router}/>
  {noti&&<Notification message={noti} onClose={() => setNoti(null)}/>}
  </Context.Provider>
  )
}

export default App;
