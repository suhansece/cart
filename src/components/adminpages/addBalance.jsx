import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../App";

const AddBalance = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
const {setNoti}=useContext(Context);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFindDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`api/user/${username}`);
      setUserData(response.data);
    } catch (error) {
      setError("Error fetching user details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddBalance = async () => {
    try {
      await axios.put(`api/user/addbalance/${username}`, { amount: Number(amount) });
      setUserData(null);
      setUsername("");
      setNoti('Amount Added')
      setAmount(0);
    } catch (error) {
      console.log("Error adding balance", error);
    }
  };
  return (
    <div className="add-balance">
      <div className="find-user">
        <h1> Add Amount</h1>
        <div>
          <input
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="UserName"
          />
          <button onClick={handleFindDetails}>Find Details</button>
        </div>
        <input
          name="amount"
          value={amount}
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)
          }
        />
        <button onClick={handleAddBalance}>Add</button>
        <p>{userData?`Balance: ${userData.balance}`:''}</p>
      </div>
      <hr/>
      {isLoading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div>
          {userData.history.map((data, index) => (
            <div className="bill" key={index}>
              <div className="bill-header">
                <p>
                  Date: {data.date.slice(4,16)} | {data.date.slice(16, 24)}
                </p>
                <p>No: 154 </p>
              </div>
              <div className="bill-body">
                <p>Name: {data.name}</p>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.items.map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>₹{item.price}</td>
                        <td className="total-td">{item.noOfItems}</td>
                        <td className="total-td">
                          ₹{item.noOfItems * item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="total">Total: ₹{data.total}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddBalance;
