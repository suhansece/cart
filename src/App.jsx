import React, { useEffect, useState } from "react";
import "./App.css";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Head from "./components/Head";
import Body from "./components/body";
import axios from "axios";
import Login from "./components/login";
import Register from "./components/register";
import Homebody from "./components/homebody";

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
    }] 
  },{
    path:"/login",
    element:<Login/>
  },{
    path:"/register",
    element:<Register/>
  }
]);

const App=()=>{
  const[cart,setCart]=useState(false);
  const [user,setUser]=useState();

  const fetchUser=async()=>{
      const user =await axios.get('api/user');
      setUser(user.data);
  }

useEffect(()=>{
  fetchUser();
},[])

  return(
  <Context.Provider value={{cart,setCart,fetchUser,user}}>
  <RouterProvider router={router}/>
  </Context.Provider>
  )
}

export default App;
