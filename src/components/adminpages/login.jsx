import { useState } from "react";

const Login = () => {
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    const onChangeusername = (e)=>{
        setUsername(e.target.value)
    }
    const onChangepassword = (e)=>{
        setPassword(e.target.value)
    }

    const submitForm = (e)=>{
        e.preventDefault()
    }
  return (
    <div>
      <h1> Admin Login</h1>
      <form>
        <div className="user-name">
          <label>Username</label>
          <input value={username} onChange={onChangeusername} />
        </div>
        <div className="password">
          <label>Password</label>
          <input value={password} onChange={onChangepassword} />
        </div>
        <button type="submit" onClick={(e)=>submitForm(e)}></button>
      </form>
    </div>
  );
};

export default Login;
