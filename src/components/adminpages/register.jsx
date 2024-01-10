import axios from "axios";
import  { useContext, useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const{fetchUser}=useContext(Context)
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitForm =async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try{
      await axios.post('api/admin/register',{username,email,password})
      fetchUser();
      navigate('/admin')
      setUsername("");
      setPassword("");
      setEmail("");
      setConfirmPassword("");
      setError(null);
    }catch(e){
        setError(e.response.data.message);
    }
   
  };
  return (
    <div className="login">
    <div className="container">
      <h1>Admin Register</h1>
      <form>
          <input placeholder="Username"value={username} onChange={onChangeUsername} />
          <input placeholder="Email"value={email} onChange={onChangeEmail} />
          <input placeholder="Password"value={password} type="password" onChange={onChangePassword} />
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={onChangeConfirmPassword}
          />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" onClick={submitForm}>
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default AdminRegister;
