import axios from "axios";
import  { useContext, useState } from "react";
import { Context } from "../App";


const Login = () => {
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const {fetchUser}=useContext(Context);

    const onChangeusername = (e)=>{
        setUsername(e.target.value)
    }
    const onChangepassword = (e)=>{
        setPassword(e.target.value)
    }

    const submitForm = async(e)=>{
        e.preventDefault()
        try{
          await axios.post('api/user/login',{"username":username,"password":password});
          fetchUser();
        }catch(e){
            console.log(e);
        }
    }
  return (
    <div>
      <h1>User Login</h1>
      <form>
        <div className="user-name">
          <label>Username</label>
          <input value={username} onChange={onChangeusername} />
        </div>
        <div className="password">
          <label>Password</label>
          <input value={password} onChange={onChangepassword} />
        </div>
        <button type="submit" onClick={(e)=>submitForm(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
