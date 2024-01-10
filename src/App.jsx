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
    element:<AdminHome/>
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

  const fetchUser=async()=>{
    if(isLoggedIn()){
      const user =await axios.get('api/user');
      setUser(user.data);
    }
  }


useEffect(()=>{
  fetchUser();
  console.log();
},[])

  return(
  <Context.Provider value={{cart,setCart,fetchUser,user,setUser,bill,setBill}}>
  <RouterProvider router={router}/>
  </Context.Provider>
  )
}

export default App;
