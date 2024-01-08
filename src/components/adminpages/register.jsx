import { useState } from "react";

const Register = () => {
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const onChangeusername = (e)=>{
        setUsername(e.target.value)
    }
    const onChangepassword = (e)=>{
        setPassword(e.target.value)
    }
    const onChangeconfirmPassword = (e)=>{
      setConfirmPassword(e.target.value)
  }
  const onChangeEmail = (e)=>{
    setEmail(e.target.value)
}

    const submitForm = (e)=>{
        e.preventDefault()
    }
  return (
    <div>
      <h1> Admin Register </h1>
      <form>
        <div className="user-name">
          <label>Username</label>
          <input value={username} onChange={onChangeusername} />
        </div>
        <div className="email">
          <label>Email</label>
          <input value={email} onChange={onChangeEmail} />
        </div>
        <div className="password">
          <label>Password</label>
          <input value={password} onChange={onChangepassword} />
        </div>
        <div className="confirm-password">
          <label>Confirm Password</label>
          <input value={confirmPassword} onChange={onChangeconfirmPassword} />
        </div>
        <button type="submit" onClick={(e)=>submitForm(e)}></button>
      </form>
    </div>
  );
};

export default Register;
