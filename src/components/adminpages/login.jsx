import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { fetchUser ,setAdmin} = useContext(Context);
  const [error, setError] = useState(null);

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
      const admin=await axios.post("api/admin/login", { username: username,password: password});
      setAdmin(admin.data.name)
      navigate("/admin")
      fetchUser()
      setPassword('')
      setUsername('')
    } catch (e) {
      setError(e.response.data.message);
    }
  };
  return (
    <div className="login">
      <div className="container">
        <h1>Admin Login</h1>
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

export default AdminLogin;
