import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { fetchUser } = useContext(Context);
  const [error, setError] = useState(null);
  const {setNoti}=useContext(Context);

  const navigate = useNavigate();

  const onChangeusername = (e) => {
    setUsername(e.target.value);
  };
  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("All fields are required");
      return;
    }
    try {
      await axios.post("api/user/login", { username: username,password: password,});
  
      navigate("/")
      fetchUser()
      setPassword('')
      setUsername('')
      setNoti('Login success')
      setTimeout(() => {
        navigate("/login")
        Cookies.remove('token')
      }, "300000");
    } catch (e) {
      setError(e.response.data.message);
    }
  };
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form>
          <input
            value={username}
            placeholder="UserName"
            onChange={onChangeusername}
          />
          <input
            value={password}
            placeholder="Password"
            type="password"
            onChange={onChangepassword}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" onClick={(e) => submitForm(e)}>
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
